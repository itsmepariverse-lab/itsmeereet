'use client';

import React from 'react';
import { motion } from 'framer-motion';

const expertiseData = [
    {
        category: "Education",
        items: ["M.Sc. Physics (Pursuing)", "B.Sc. Physics", "Core Scientific Principles", "Mathematical Logic"]
    },
    {
        category: "Skills",
        items: ["English 40 WPM", "Hindi 35 WPM", "Data Entry", "Conflict Resolution", "Tech Documentation", "Customer Service"]
    },
    {
        category: "Hobbies",
        items: ["Browsing", "Travelling", "Art", "Dancing", "Writing"]
    }
];

export default function Skills() {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
        <section className="relative w-full py-32 px-6 bg-transparent overflow-hidden">
            {/* Background Atomic Orbits */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                <div className="w-[500px] h-[500px] border border-cyber-cyan rounded-full animate-[spin_20s_linear_infinite]" />
                <div className="absolute w-[450px] h-[450px] border border-nebula-pink rounded-full animate-[spin_25s_linear_infinite]" />
            </div>

            <div className="relative container mx-auto z-10 max-w-4xl">
                <h2 className="text-4xl md:text-6xl font-heading font-bold text-center text-white mb-16 tracking-tighter uppercase">
                    EXPERTISE
                </h2>

                {/* Tab Controls */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {expertiseData.map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`px-8 py-3 font-heading font-bold tracking-widest text-sm transition-all duration-300 rounded-full border ${activeTab === idx
                                ? 'bg-nebula-pink/20 border-nebula-pink text-white shadow-[0_0_20px_rgba(255,0,122,0.3)]'
                                : 'bg-white/5 border-white/10 text-gray-500 hover:border-white/30'
                                }`}
                        >
                            {tab.category.toUpperCase()}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="bg-card-bg/30 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-3xl min-h-[350px] flex flex-col items-center justify-center text-center"
                >
                    <div className="flex flex-col items-center gap-6">
                        {expertiseData[activeTab].items.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                                className="flex items-center gap-4 text-xl md:text-2xl text-gray-200 font-heading font-medium"
                            >
                                <span className={`w-2 h-2 rounded-full ${activeTab === 0 ? 'bg-cyber-cyan shadow-[0_0_10px_rgba(0,242,255,0.5)]' : activeTab === 1 ? 'bg-nebula-pink shadow-[0_0_10px_rgba(255,0,122,0.5)]' : 'bg-soft-lavender shadow-[0_0_10px_rgba(224,176,255,0.5)]'}`} />
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
