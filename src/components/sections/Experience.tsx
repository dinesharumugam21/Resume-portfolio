"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
    {
        role: "Research Assistant",
        company: "Binghamton University",
        period: "2024 - Present",
        desc: [
            "Built EMG gesture-recognition pipeline",
            "Cut latency by 50%",
            "Improved signal quality with preprocessing",
        ],
        link: "https://www.binghamton.edu",
        color: "border-blue-500",
    },
    {
        role: "Data Scientist Intern",
        company: "Universal Instruments",
        period: "2024 (May-Aug)",
        desc: [
            "Built computer-vision pipeline",
            "Improved detection accuracy by 30%",
            "Reduced inspection time by 50%",
        ],
        link: "https://www.uic.com",
        color: "border-cyan-500",
    },
    {
        role: "Data Analyst (Remote)",
        company: "Emglitz Technologies",
        period: "2022 - 2023",
        desc: [
            "Built ETL workflows (100K+ records)",
            "Created Tableau dashboards",
            "Improved decision metrics by 40%",
        ],
        link: "https://emglitz.com",
        color: "border-emerald-500",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="relative w-full py-20 px-6 min-h-screen flex flex-col items-center">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <span className="text-cyan-400 font-semibold tracking-wide uppercase">Career Path</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Experience</h2>
            </motion.div>

            <div className="relative max-w-4xl w-full">
                {/* Vertical Line */}
                <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 opacity-50" />

                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className={`relative flex items-center justify-between md:justify-normal gap-8 mb-16 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                            } flex-row-reverse`}
                    >
                        {/* Spacer for destktop timeline centering */}
                        <div className="hidden md:block w-1/2" />

                        {/* Timeline Node */}
                        <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 rounded-full bg-[#0A1929] border-4 border-cyan-400 z-10 shadow-[0_0_15px_rgba(0,229,255,0.5)]" />

                        {/* Content Card */}
                        <div className={`w-full md:w-[calc(50%-2rem)] ml-12 md:ml-0 group`}>
                            <a
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block relative p-6 rounded-2xl bg-[#0A1929]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400 transition-all hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(0,10,30,0.5)] ${exp.color} border-l-4`}
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{exp.role}</h3>
                                    <Briefcase size={18} className="text-gray-400" />
                                </div>

                                <div className="flex items-center gap-2 mb-4 text-sm text-gray-400">
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                    <span className="w-1 h-1 rounded-full bg-gray-500" />
                                    <span>{exp.company}</span>
                                </div>

                                <ul className="space-y-2">
                                    {exp.desc.map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
