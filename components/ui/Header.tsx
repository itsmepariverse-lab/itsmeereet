'use client';

import React from 'react';
import { motion } from 'framer-motion';

import Magnetic from './Magnetic';

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="flex items-center gap-2">
                <Magnetic>
                    <div className="w-8 h-8 md:w-10 md:h-10 border border-nebula-pink/50 bg-nebula-pink/10 flex items-center justify-center rounded-sm rotate-45 shadow-[0_0_15px_rgba(255,0,122,0.3)] cursor-pointer">
                        <span className="text-nebula-pink font-heading font-bold text-lg -rotate-45">R</span>
                    </div>
                </Magnetic>
                <span className="hidden md:block font-heading font-bold text-xl tracking-wider text-white">
                    REET KUMARI
                </span>
            </div>

        </motion.header>
    );
}
