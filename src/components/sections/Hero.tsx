"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Shapes from "@/components/canvas/Shapes";

const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Mail, href: "mailto:darumugam001@gmail.com", label: "Email" },
];

const stats = [
    { value: "95%+", label: "Model Accuracy", desc: "Optimized Performance" },
    { value: "50%", label: "Latency Reduction", desc: "Efficient Inference" },
    { value: "100K+", label: "Records Processed", desc: "Data Pipeline Mastery" },
];

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center overflow-hidden">
            {/* 3D Shapes Background Layer - Pointer events allowed on specific shapes, but generally we want text on top */}
            <div className="absolute inset-0 z-0">
                <Shapes />
            </div>

            <div className="container mx-auto px-6 z-10 relative pointer-events-none">
                <div className="max-w-4xl pointer-events-auto">
                    {/* Name & Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                                DINESH ARUMUGAM
                            </span>
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
                            Data Scientist & ML Engineer
                            <span className="block text-cyan-400 mt-2 text-xl md:text-2xl font-normal">
                                Building Intelligent Solutions
                            </span>
                        </h2>
                    </motion.div>

                    {/* Stats Cards */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10"
                    >
                        {stats.map((stat, idx) => (
                            <div
                                key={idx}
                                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/50 transition-colors shadow-lg"
                            >
                                <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                                <p className="text-sm font-semibold text-cyan-400">{stat.label}</p>
                                <p className="text-xs text-gray-400">{stat.desc}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all text-white"
                                aria-label={link.label}
                            >
                                <link.icon size={24} />
                            </a>
                        ))}

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full text-white font-semibold hover:contrast-125 transition-all shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                        >
                            <Download size={20} />
                            Download Resume
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-sm flex flex-col items-center gap-2"
            >
                <span>Scroll to Explore</span>
                <div className="w-px h-12 bg-gradient-to-b from-cyan-400 to-transparent animate-pulse" />
            </motion.div>
        </section>
    );
}
