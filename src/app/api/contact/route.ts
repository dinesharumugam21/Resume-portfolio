import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend
const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (best-effort for serverless)
// Map<IP_Address, { count: number, startTime: number }>
const rateLimitMap = new Map<string, { count: number; startTime: number }>();

const RATE_LIMIT_WINDOW = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

// Helper to remove old entries to prevent memory leaks
function cleanupRateLimit() {
    const now = Date.now();
    for (const [ip, data] of rateLimitMap.entries()) {
        if (now - data.startTime > RATE_LIMIT_WINDOW) {
            rateLimitMap.delete(ip);
        }
    }
}

// Cleanup every 1 hour purely as a precaution
setInterval(cleanupRateLimit, 60 * 60 * 1000);

export async function POST(request: Request) {
    try {
        const ip = request.headers.get('x-forwarded-for') || 'unknown';

        // 1. Rate Limiting Check
        const now = Date.now();
        const rateData = rateLimitMap.get(ip);

        if (rateData) {
            if (now - rateData.startTime > RATE_LIMIT_WINDOW) {
                // Reset window
                rateLimitMap.set(ip, { count: 1, startTime: now });
            } else if (rateData.count >= MAX_REQUESTS) {
                return NextResponse.json(
                    { error: 'Too many requests. Please try again later.' },
                    { status: 429 }
                );
            } else {
                rateData.count++;
            }
        } else {
            rateLimitMap.set(ip, { count: 1, startTime: now });
        }

        const { name, email, message, company } = await request.json();

        // 2. Honeypot Check (Anti-Spam)
        // If 'company' (hidden field) is filled, treat as bot but return success to fool them
        if (company) {
            return NextResponse.json({ ok: true });
        }

        // 3. Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Basic email regex validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // 4. Send Email via Resend
        const contactEmail = process.env.CONTACT_TO_EMAIL;
        if (!contactEmail) {
            console.error('CONTACT_TO_EMAIL env var not set.');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const { error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // Default Resend verified domain. User should update if they verify their own.
            to: contactEmail,
            subject: `New Message from Portfolio: ${name}`,
            replyTo: email,
            text: `
Name: ${name}
Email: ${email}
Message:
${message}
      `,
        });

        if (error) {
            console.error('Resend Error:', error);
            return NextResponse.json(
                { error: 'Failed to send message. Please try again.' },
                { status: 500 }
            );
        }

        return NextResponse.json({ ok: true });

    } catch (err) {
        console.error('API Error:', err);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
