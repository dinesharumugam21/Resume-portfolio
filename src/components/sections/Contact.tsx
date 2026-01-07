"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const form = e.currentTarget;
        const formData = new FormData(form);

        const payload = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to send message.");
            }

            setStatus("success");
            form.reset();

            // Reset success message after 5 seconds
            setTimeout(() => setStatus("idle"), 5000);

        } catch (error: any) {
            setStatus("error");
            setErrorMessage(error.message || "Failed to send message.");
        }
    }

    return (
        <section id="contact" className="relative w-full py-20 px-6 min-h-screen flex flex-col items-center justify-center bg-[#0A1929] overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-6xl w-full z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                {/* Left Side: Info */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-cyan-400 font-semibold tracking-wide uppercase">Get in Touch</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white mb-6">Let's Connect</h2>
                    <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                        I'm always interested in discussing new opportunities, innovative projects,
                        and collaborations at the intersection of technology and sustainability.
                    </p>

                    <div className="flex gap-4 mb-12">
                        <a href="https://linkedin.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 transition-colors border border-white/10 hover:border-blue-400/50">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-gray-600/20 text-gray-300 hover:text-white transition-colors border border-white/10 hover:border-white/50">
                            <Github size={24} />
                        </a>
                        <a href="mailto:darumugam001@gmail.com" className="p-3 bg-white/5 rounded-full hover:bg-emerald-600/20 text-gray-300 hover:text-emerald-400 transition-colors border border-white/10 hover:border-emerald-400/50">
                            <Mail size={24} />
                        </a>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="p-6 bg-[#001E3C]/50 backdrop-blur-md border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                                <Mail className="text-cyan-400" size={20} />
                            </div>
                            <h3 className="text-gray-400 text-sm mb-1">Email</h3>
                            <p className="text-white font-medium">darumugam001@gmail.com</p>
                        </div>

                        <div className="p-6 bg-[#001E3C]/50 backdrop-blur-md border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-colors group">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                                <Phone className="text-blue-400" size={20} />
                            </div>
                            <h3 className="text-gray-400 text-sm mb-1">Phone</h3>
                            <p className="text-white font-medium">(607) 297-8068</p>
                        </div>

                        <div className="p-6 bg-[#001E3C]/50 backdrop-blur-md border border-white/10 rounded-2xl hover:border-cyan-400/50 transition-colors group sm:col-span-2">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                <MapPin className="text-emerald-400" size={20} />
                            </div>
                            <h3 className="text-gray-400 text-sm mb-1">Location</h3>
                            <p className="text-white font-medium">Binghamton, NY (Open to Relocation: NYC, Boston, Seattle)</p>
                        </div>
                    </div>
                </motion.div>

                {/* Right Side: Form (Visual) */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl relative"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>

                    <form className="space-y-6" onSubmit={onSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm text-gray-400 mb-2">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                required
                                className="w-full bg-[#0A1929] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm text-gray-400 mb-2">Your Email</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                required
                                className="w-full bg-[#0A1929] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm text-gray-400 mb-2">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                className="w-full bg-[#0A1929] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors placeholder:text-gray-600 min-h-[150px]"
                                placeholder="Hi Dinesh, I'd like to talk about..."
                            />
                        </div>

                        <button
                            disabled={status === 'loading' || status === 'success'}
                            type="submit"
                            className={`w-full font-semibold py-4 rounded-lg transition-all shadow-[0_0_20px_rgba(66,133,244,0.3)] flex items-center justify-center gap-2
                                ${status === 'success' ? 'bg-green-600 text-white cursor-default' : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:brightness-110'}
                                ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}
                            `}
                        >
                            {status === 'loading' && <Loader2 className="animate-spin" size={20} />}
                            {status === 'success' && <CheckCircle size={20} />}
                            {status === 'idle' && <Send size={20} />}
                            {status === 'error' && <Send size={20} />}

                            {status === 'loading' ? 'Sending...' :
                                status === 'success' ? 'Message Sent!' : 'Send Message'}
                        </button>

                        {/* Status Messages */}
                        {status === 'error' && (
                            <div className="flex items-center gap-2 text-red-400 text-sm mt-2 animate-pulse">
                                <AlertCircle size={16} />
                                <span>{errorMessage}</span>
                            </div>
                        )}
                        {status === 'success' && (
                            <p className="text-green-400 text-sm mt-2 text-center">
                                Thanks for reaching out! I'll get back to you soon.
                            </p>
                        )}
                    </form>
                </motion.div>

            </div>
        </section>
    );
}
