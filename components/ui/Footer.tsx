'use client';

import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative w-full py-12 px-6 bg-black border-t border-white/10 z-10">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <span className="text-cyber-cyan font-heading font-bold text-xl">R</span>
                    <span className="text-white font-mono text-sm">© 2024 Reet Kumari</span>
                </div>

                <div className="flex items-center gap-6">
                    <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors"><Github size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors"><Linkedin size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-cyber-cyan transition-colors"><Mail size={20} /></a>
                </div>
            </div>
        </footer>
    );
}
