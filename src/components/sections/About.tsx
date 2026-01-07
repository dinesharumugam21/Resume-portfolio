"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Database, Layout, Server, Cpu, Cloud, Code } from "lucide-react";
import Image from "next/image";

const techStack = [
    { icon: Code, label: "Python", color: "text-blue-500" },
    { icon: Layout, label: "Tableau", color: "text-orange-500" },
    { icon: Cpu, label: "TensorFlow", color: "text-orange-600" },
    { icon: Cloud, label: "AWS", color: "text-yellow-500" },
    { icon: Server, label: "Docker", color: "text-blue-400" },
    { icon: Database, label: "SQL", color: "text-cyan-500" },
];

import TiltCard from "@/components/ui/TiltCard";

export default function About() {
    return (
        <section className="relative w-full py-20 px-6 flex flex-col items-center justify-center min-h-screen">
            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Profile / Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        About <span className="text-cyan-400">Me</span>
                    </h2>
                    <TiltCard className="z-10">
                        <div className="p-8 rounded-2xl bg-[#0A1929]/50 backdrop-blur-xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] bg-gradient-to-br from-white/5 to-white/[0.02]">
                            <p className="text-lg text-gray-300 leading-relaxed mb-6">
                                I am a <strong>Computer Engineer</strong> with expertise in Data Analytics, Machine Learning, and deployment-ready pipelines.
                                I build scalable intelligent solutions using <span className="text-cyan-400">Python</span>,
                                <span className="text-cyan-400"> SQL</span>, and modern ML frameworks like <span className="text-coral-400">TensorFlow</span> and <span className="text-coral-400">XGBoost</span>.
                            </p>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                My work focuses on improving model accuracy, reducing inference latency, and automating workflows with a strong emphasis on
                                <span className="text-emerald-400"> responsible AI deployment</span> and data privacy.
                            </p>

                            <div className="mt-8">
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition-all"
                                >
                                    <DownloadIcon /> Download Resume (PDF)
                                </a>
                            </div>
                        </div>
                    </TiltCard>
                </motion.div>

                {/* Orbit Side */}
                <div className="relative h-[500px] w-full flex items-center justify-center">
                    {/* Central Node */}
                    <div className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-2xl opacity-50 animate-pulse" />
                    <div className="relative z-10 w-32 h-32 bg-gray-900/80 backdrop-blur-md rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_30px_rgba(66,133,244,0.3)]">
                        <span className="text-4xl">🚀</span>
                    </div>

                    {/* Orbital Rings */}
                    <div className="absolute w-64 h-64 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
                    <div className="absolute w-96 h-96 border border-white/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                    {/* Orbiting Icons */}
                    {techStack.map((tech, i) => {
                        const angle = (i / techStack.length) * 2 * Math.PI;
                        const radius = 160; // Distance from center
                        // Simple static positioning for layout, animation can be added via CSS orbit keyframes if desired
                        // For now, let's use absolute positioning with animation
                        return (
                            <motion.div
                                key={tech.label}
                                className="absolute"
                                animate={{
                                    rotate: 360,
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                    delay: -i * (20 / techStack.length)
                                }}
                                style={{
                                    width: 400, // Orbit diameter essentially
                                    height: 400,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'start' // Items at top
                                }}
                            >
                                {/* Counter-rotate the icon container to keep it upright */}
                                <motion.div
                                    className={`p-4 rounded-xl bg-[#0A1929] border border-white/10 shadow-lg flex flex-col items-center gap-2 ${tech.color}`}
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: -i * (20 / techStack.length) }}
                                >
                                    <tech.icon size={28} />
                                    <span className="text-xs font-semibold text-gray-300">{tech.label}</span>
                                </motion.div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

function DownloadIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
    )
}
