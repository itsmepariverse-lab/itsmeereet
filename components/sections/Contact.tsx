'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Send, Twitter } from 'lucide-react';

export default function Contact() {
    const contacts = [
        {
            name: 'X (Twitter)',
            value: '@Pari_Web3',
            link: 'https://x.com/Pari_Web3',
            icon: <Twitter size={24} />,
            color: 'group-hover:text-nebula-pink',
        },
        {
            name: 'Telegram',
            value: '@pari_web3',
            link: 'https://t.me/pari_web3',
            icon: <Send size={24} />,
            color: 'group-hover:text-cyber-cyan',
        },
        {
            name: 'Discord',
            value: 'pari_web3',
            link: '#',
            icon: <MessageCircle size={24} />,
            color: 'group-hover:text-nebula-pink',
        },
        {
            name: 'Email',
            value: 'itsmepariverse@gmail.com',
            link: 'mailto:itsmepariverse@gmail.com',
            icon: <Mail size={24} />,
            color: 'group-hover:text-cyber-cyan',
        },
    ];

    return (
        <section className="relative w-full py-24 z-10" id="contact">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50 mb-4">
                        Let's Connect
                    </h2>
                    <div className="h-1 w-20 bg-cyber-cyan mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {contacts.map((contact, index) => {
                        const isLink = contact.link !== '#';
                        const Component = isLink ? 'a' : 'div';
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Component
                                    {...(isLink ? { href: contact.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                                    className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-white/20 transition-all duration-300 ${isLink ? 'hover:-translate-y-2 cursor-pointer' : 'cursor-default'}`}
                                >
                                    <div className={`mb-4 text-white/50 transition-colors duration-300 ${contact.color}`}>
                                        {contact.icon}
                                    </div>
                                    <h3 className="text-lg font-heading font-bold text-white mb-2">{contact.name}</h3>
                                    <p className="text-sm text-gray-400 text-center font-mono">{contact.value}</p>
                                    
                                    {/* Hover effect glow */}
                                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                </Component>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
