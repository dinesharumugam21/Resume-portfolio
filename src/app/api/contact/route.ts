import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return Response.json({ error: "Missing fields" }, { status: 400 });
        }

        const resend = new Resend(process.env.RESEND_API_KEY);

        const { error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>", // later you can use your domain
            to: process.env.CONTACT_TO_EMAIL!,         // your email
            subject: `Portfolio message from ${name}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        });

        if (error) {
            console.error("Resend Error:", error);
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ ok: true });
    } catch (e) {
        console.error("Internal Server Error:", e);
        return Response.json({ error: "Server error" }, { status: 500 });
    }
}
