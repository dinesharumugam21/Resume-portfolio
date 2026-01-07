"use client";

import { motion } from "framer-motion";
import { Github, Terminal, Activity, Car } from "lucide-react";
import TiltCard from "@/components/ui/TiltCard";

const projects = [
    {
        title: "FraudGuard",
        desc: "Real-time Card Fraud Detection System",
        tags: ["Python", "XGBoost", "Docker", "MLflow", "Qdrant", "LangChain"],
        metrics: ["ROC-AUC > 0.95", "Sub-100ms scoring"],
        icon: Terminal,
        github: "https://github.com/your-username/fraudguard",
        color: "from-blue-600 to-cyan-600",
    },
    {
        title: "CareIQ",
        desc: "Readmission Risk Prediction",
        tags: ["Python", "FastAPI", "K8s", "RAG", "TensorFlow"],
        metrics: ["Sub-500ms inference", "70% faster analysis"],
        icon: Activity,
        github: "https://github.com/your-username/careiq",
        color: "from-emerald-600 to-teal-600",
    },
    {
        title: "Smart City Traffic",
        desc: "Traffic Forecasting & Flow Optimization",
        tags: ["TensorFlow", "PySpark", "LSTM", "Time Series"],
        metrics: ["15-min ahead forecast", "1M+ daily GPS signals", "Real-time processing", "LSTM time series"],
        icon: Car,
        github: "https://github.com/your-username/traffic-forecasting",
        color: "from-orange-600 to-red-600",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="relative w-full py-20 px-6 min-h-screen flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16 text-center"
            >
                <span className="text-cyan-400 font-semibold tracking-wide uppercase">Portfolio</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Featured Projects</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <TiltCard className="h-full">
                            <div className="h-full p-8 rounded-2xl bg-[#0A1929]/80 backdrop-blur-md border border-white/10 hover:border-cyan-400/50 transition-colors flex flex-col group">
                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 shadow-lg`}>
                                    <project.icon className="text-white" size={24} />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-6">{project.desc}</p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 text-xs font-semibold text-cyan-200 bg-cyan-900/30 border border-cyan-500/30 rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    {project.metrics.map(metric => (
                                        <div key={metric} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
                                            <span className="text-sm font-semibold text-emerald-400">{metric}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-auto flex gap-4 pt-4 border-t border-white/10">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        <Github size={18} /> View Code
                                    </a>

                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
