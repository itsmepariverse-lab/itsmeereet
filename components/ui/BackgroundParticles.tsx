'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundParticles() {
    const particles = Array.from({ length: 20 });

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full"
                    initial={{
                        x: Math.random() * 100 + '%',
                        y: Math.random() * 100 + '%',
                        opacity: Math.random() * 0.3 + 0.1,
                        scale: Math.random() * 0.5 + 0.5,
                        backgroundColor: i % 2 === 0 ? '#00F2FF' : '#FF007A',
                    }}
                    animate={{
                        y: [null, '-20%', '120%'],
                        transition: {
                            duration: Math.random() * 20 + 20,
                            repeat: Infinity,
                            ease: 'linear',
                        },
                    }}
                    style={{
                        width: Math.random() * 10 + 2 + 'px',
                        height: Math.random() * 10 + 2 + 'px',
                        filter: 'blur(2px)',
                    }}
                />
            ))}
        </div>
    );
}
