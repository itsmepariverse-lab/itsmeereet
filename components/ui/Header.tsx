'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Wallet } from 'lucide-react';

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 md:w-10 md:h-10 border border-cyber-cyan/50 bg-cyber-cyan/10 flex items-center justify-center rounded-sm rotate-45">
                    <span className="text-cyber-cyan font-heading font-bold text-lg -rotate-45">R</span>
                </div>
                <span className="hidden md:block font-heading font-bold text-xl tracking-wider text-white">
                    REET KUMARI
                </span>
            </div>

            <button className="group relative px-6 py-2.5 bg-cyber-cyan/10 border border-cyber-cyan/50 text-cyber-cyan font-heading font-semibold uppercase tracking-widest text-sm hover:bg-cyber-cyan hover:text-black transition-all duration-300 clip-path-slant">
                <span className="flex items-center gap-2">
                    <Wallet className="w-4 h-4" />
                    Connect Wallet
                </span>
                <div className="absolute inset-0 bg-cyber-cyan/20 translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </button>
        </motion.header>
    );
}
