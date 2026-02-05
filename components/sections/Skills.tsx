'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    { category: "Physics", items: ["M.Sc. Physics (Pursuing)", "B.Sc. Physics"] },
    { category: "Admin", items: ["English 40 WPM", "Hindi 35 WPM", "Data Entry"] },
    { category: "Core", items: ["Conflict Resolution", "Tech Documentation", "Customer Service"] }
];

export default function Skills() {
    return (
        <section className="relative w-full py-32 px-6 bg-obsidian overflow-hidden">
            {/* Background Atomic Orbits */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="w-[500px] h-[500px] border border-cyber-cyan rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute w-[400px] h-[400px] border border-cyber-cyan rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute w-[300px] h-[300px] border border-cyber-cyan rounded-full animate-[spin_8s_linear_infinite]" />
            </div>

            <div className="relative container mx-auto z-10">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-center text-white mb-20 tracking-tighter">
                    <span className="text-cyber-cyan">03.</span> PHYSICS LAB
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-card-bg/40 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-cyber-cyan/40 transition-all duration-300 group"
                        >
                            <h3 className="text-2xl font-heading font-bold text-cyber-cyan mb-6 text-center group-hover:tracking-widest transition-all">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-4">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-300 font-mono text-sm">
                                        <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
