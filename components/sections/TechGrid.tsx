'use client';

import React from 'react';
import { motion } from 'framer-motion';

const techStack = [
    {
        category: 'Moderation Suite',
        tools: ['Discord (Advanced Architecture)', 'Wick', 'MEE6', 'Carl-bot', 'Telegram (Combot, Rose, Shield)'],
    },
    {
        category: 'Web3 Growth Tools',
        tools: ['Galxe', 'Zealy', 'Layer3', 'Snapshot (Governance)'],
    },
    {
        category: 'Operations Suite',
        tools: ['Notion', 'GitBook', 'Google Workspace', 'Microsoft Excel'],
    },
    {
        category: 'Security Tools',
        tools: ['Revoke.cash', 'Etherscan', 'Anti-Phishing logic'],
    },
];

export default function TechGrid() {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-obsidian">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-center text-white mb-20 tracking-tighter">
                <span className="text-cyber-cyan">_</span> THE GRID
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {techStack.map((stack, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: idx * 0.1 }}
                        className="group relative bg-card-bg border border-white/5 p-8 overflow-hidden transition-all duration-300 hover:border-cyber-cyan/30"
                    >
                        {/* Hover Glitch Overlay */}
                        <div className="absolute inset-0 bg-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                        <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-wider group-hover:text-cyber-cyan transition-colors">
                            {stack.category}
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {stack.tools.map((tool, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1.5 bg-black/50 border border-white/10 text-gray-400 text-sm font-mono rounded hover:bg-cyber-cyan/10 hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-colors cursor-default"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
