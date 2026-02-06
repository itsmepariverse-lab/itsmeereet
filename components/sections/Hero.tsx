'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex flex-col justify-center items-center z-10 pointer-events-none">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-4"
                >
                    <h2 className="text-cyber-cyan font-heading text-lg md:text-xl tracking-[0.2em] uppercase">
                        India based
                    </h2>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50">
                        REET
                        <br />
                        KUMARI
                    </h1>
                    <div className="h-1 w-24 mx-auto bg-cyber-cyan/50 rounded-full" />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-gray-400 font-sans text-sm md:text-base tracking-widest uppercase max-w-xl mx-auto"
                    >
                        Web3 Operations Expert | Community Strategist
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] uppercase tracking-widest text-cyber-cyan/70">Scroll to Explore</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyber-cyan/0 via-cyber-cyan/50 to-cyber-cyan/0 animate-pulse-slow" />
            </motion.div>
        </section>
    );
}
