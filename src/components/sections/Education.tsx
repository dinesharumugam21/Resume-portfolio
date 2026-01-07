"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const education = [
    {
        school: "Binghamton University",
        degree: "B.S. Computer Engineering",
        period: "2023 - 2025",
        logo: "BU",
        color: "bg-emerald-600",
        details: ["Statistical Analysis", "Predictive Analytics", "Deep Learning", "Reinforcement Learning"]
    },
    {
        school: "PSG College of Technology",
        degree: "B.Tech Computer Science",
        period: "2021 - 2023",
        logo: "PSG",
        color: "bg-blue-600",
        details: ["30% Scholarship", "Academic Performance (1st & 2nd year)"]
    }
];

const leadership = [
    {
        title: "Peer Mentor",
        org: "Watson College",
        desc: "15+ students | Sep'24-Apr'25",
        icon: BookOpen,
        color: "text-blue-400"
    },
    {
        title: "IBM Deep Learning",
        org: "Coursera",
        desc: "Sentimental Analysis & RL",
        icon: Award,
        color: "text-cyan-400"
    },
    {
        title: "Data Science Bootcamp",
        org: "Udemy",
        desc: "Complete Data Science Stack",
        icon: Award,
        color: "text-orange-400"
    },
    {
        title: "Advanced ML",
        org: "Binghamton U.",
        desc: "Graduate Level Coursework",
        icon: GraduationCap,
        color: "text-emerald-400"
    }
];

export default function Education() {
    return (
        <section className="relative w-full py-20 px-6 min-h-screen flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <span className="text-cyan-400 font-semibold tracking-wide uppercase">Academic Background</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Education & Leadership</h2>
            </motion.div>

            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <TiltCard className="h-full">
                            <div className="h-full p-8 rounded-2xl bg-[#0A1929]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-colors">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-lg ${edu.color} flex items-center justify-center text-white font-bold shadow-lg`}>
                                        {edu.logo}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{edu.school}</h3>
                                        <p className="text-sm text-cyan-400">{edu.degree}</p>
                                        <p className="text-xs text-gray-500">{edu.period}</p>
                                    </div>
                                </div>

                                <ul className="space-y-2">
                                    {edu.details.map((detail, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {leadership.map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ y: -5 }}
                        className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-center group"
                    >
                        <div className="mx-auto w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <item.icon className={item.color} size={24} />
                        </div>
                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                        <p className="text-sm text-cyan-400 mb-2">{item.org}</p>
                        <p className="text-xs text-gray-400">{item.desc}</p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
