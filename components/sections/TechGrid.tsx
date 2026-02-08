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

export default function TechGrid({ data }: { data: any[] }) {
    const techStack = data || [
        {
            category: 'Moderation Suite',
            tools: ['Discord (Advanced Architecture)', 'Wick', 'MEE6', 'Carl-bot', 'Telegram (Combot, Rose, Shield)'],
        }
    ];

    if (!techStack || techStack.length === 0) return null;

    // Helper to get item by index safely or return default empty object to avoid crash
    const getItem = (idx: number) => techStack[idx] || { category: '', tools: [] };

    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-transparent">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-center text-white mb-20 tracking-tighter uppercase">
                THE GRID
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 max-w-7xl mx-auto auto-rows-[250px]">
                {/* Large Card: Moderation Suite */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="md:col-span-6 lg:col-span-8 group relative bg-card-bg/50 backdrop-blur-sm border border-white/5 p-8 overflow-hidden transition-all duration-300 hover:border-nebula-pink/50 hover:shadow-[0_0_30px_rgba(255,0,122,0.15)] rounded-2xl"
                >
                    <div className="absolute inset-0 bg-nebula-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <h3 className="text-2xl font-heading font-bold text-white mb-6 uppercase tracking-wider group-hover:text-cyber-cyan transition-colors">
                        {getItem(0).category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {getItem(0).tools && getItem(0).tools.map((tool: string, i: number) => (
                            <span key={i} className="px-3 py-1.5 bg-black/50 border border-white/10 text-gray-400 text-sm font-mono rounded-lg hover:bg-cyber-cyan/10 hover:border-cyber-cyan/50 hover:text-cyber-cyan transition-colors cursor-default">
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Medium Card: Growth Tools */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-3 lg:col-span-4 group relative bg-card-bg/50 backdrop-blur-sm border border-white/5 p-8 overflow-hidden transition-all duration-300 hover:border-nebula-pink/50 hover:shadow-[0_0_30px_rgba(255,0,122,0.15)] rounded-2xl"
                >
                    <div className="absolute inset-0 bg-nebula-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-wider group-hover:text-cyber-cyan transition-colors">
                        {getItem(1).category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {getItem(1).tools && getItem(1).tools.map((tool: string, i: number) => (
                            <span key={i} className="px-3 py-1 text-xs font-mono text-gray-400 bg-black/50 border border-white/10 rounded-lg">
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Medium Card: Operations Suite */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-3 lg:col-span-4 group relative bg-card-bg/50 backdrop-blur-sm border border-white/5 p-8 overflow-hidden transition-all duration-300 hover:border-nebula-pink/50 hover:shadow-[0_0_30px_rgba(255,0,122,0.15)] rounded-2xl"
                >
                    <div className="absolute inset-0 bg-nebula-pink/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    <h3 className="text-xl font-heading font-bold text-white mb-6 uppercase tracking-wider group-hover:text-cyber-cyan transition-colors">
                        {getItem(2).category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {getItem(2).tools && getItem(2).tools.map((tool: string, i: number) => (
                            <span key={i} className="px-3 py-1 text-xs font-mono text-gray-400 bg-black/50 border border-white/10 rounded-lg">
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* Vertical Card/Highlight: Security */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="md:col-span-6 lg:col-span-8 group relative bg-nebula-pink/10 backdrop-blur-md border border-nebula-pink/30 p-8 overflow-hidden transition-all duration-300 hover:border-nebula-pink/60 hover:shadow-[0_0_30px_rgba(255,0,122,0.2)] rounded-2xl"
                >
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <span className="text-8xl font-heading font-black">SEC</span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white mb-6 uppercase tracking-wider">
                        {getItem(3).category}
                    </h3>
                    <div className="flex flex-wrap gap-4">
                        {getItem(3).tools && getItem(3).tools.map((tool: string, i: number) => (
                            <span key={i} className="text-lg font-heading font-bold text-nebula-pink hover:text-white transition-colors">
                                {tool}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
