'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        year: '2024 – Present',
        title: 'Community Moderator',
        company: 'Kima Network',
        description: 'Focus on interoperability, 25k+ member management, and sybil/scam mitigation.',
    },
    {
        year: '2023 – 2024',
        title: 'Community Moderator',
        company: 'Velodrome Finance',
        description: 'Focus on DeFi support, ve(3,3) mechanics, and liquidity provider assistance.',
    },
    {
        year: '2023 (Early-Mid)',
        title: 'Growth Contributor',
        company: 'Galxe',
        description: 'Focus on quest infrastructure, OAT distribution, and massive-scale user onboarding.',
    },
    {
        year: 'Jan 2023',
        title: 'Operations Intern',
        company: 'Confidential',
        description: 'Structured data management and GitBook documentation.',
    },
];

export default function Timeline() {
    return (
        <section className="relative w-full py-20 px-6 md:px-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-16 tracking-tighter">
                <span className="text-cyber-cyan">#</span> TIMELINE
            </h2>

            <div className="relative w-full max-w-4xl">
                {/* Vertical Line */}
                <div className="absolute left-[19px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-cyber-cyan/30 to-transparent" />

                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                }`}
                        >
                            {/* Timeline Node */}
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 flex items-center justify-center bg-obsidian border border-cyber-cyan rounded-full z-10 shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                                <div className="w-3 h-3 bg-cyber-cyan rounded-full animate-pulse" />
                            </div>

                            {/* Content Card */}
                            <div className="ml-12 md:ml-0 md:w-1/2 flex justify-start md:justify-end px-4">
                                <div className={`w-full p-6 bg-card-bg/50 backdrop-blur-sm border border-white/5 hover:border-cyber-cyan/50 transition-colors duration-300 rounded-lg group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                    }`}>
                                    <span className="inline-block px-3 py-1 mb-2 text-xs font-mono text-cyber-cyan bg-cyber-cyan/10 rounded-full">
                                        {exp.year}
                                    </span>
                                    <h3 className="text-xl text-white font-heading font-bold mb-1 group-hover:text-cyber-cyan transition-colors">
                                        {exp.title}
                                    </h3>
                                    <p className="text-sm text-gray-400 font-mono mb-3 uppercase tracking-wider">
                                        @ {exp.company}
                                    </p>
                                    <p className="text-gray-300 font-sans leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            </div>

                            {/* Empty Spacer for alternating layout */}
                            <div className="hidden md:block md:w-1/2" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
