"use client";

import SkillsUniverse from "@/components/canvas/SkillsUniverse";
import { motion } from "framer-motion";

export default function Skills() {
    return (
        <section id="skills" className="relative w-full py-20 min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-[#0A1929] to-[#001E3C]">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-10 text-center z-10"
            >
                <span className="text-cyan-400 font-semibold tracking-wide uppercase">Technical Expertise</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">Skills Constellation</h2>
                <p className="text-gray-400 mt-4 max-w-lg mx-auto">
                    Interact with the galaxy of technologies I use to build intelligent solutions.
                </p>
            </motion.div>

            <div className="w-full max-w-7xl h-full relative">
                <SkillsUniverse />

                <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 flex-wrap px-6 pointer-events-none">
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#4285F4]" /> <span className="text-sm text-gray-300">Languages</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#00E5FF]" /> <span className="text-sm text-gray-300">Data</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#FF6B6B]" /> <span className="text-sm text-gray-300">ML/AI</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-[#10B981]" /> <span className="text-sm text-gray-300">Cloud</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
