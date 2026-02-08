'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function BrandBio({ data }: { data: Record<string, any> }) {
    return (
        <section className="relative w-full py-24 px-6 md:px-12 bg-black flex justify-center">
            <div className="max-w-4xl text-center">
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-2xl md:text-3xl lg:text-4xl font-sans leading-relaxed text-gray-300"
                >
                    {data?.bio || `"I am a Web3 expert applying the laws of logic to decentralized ecosystems. Since early 2023, I have built and secured communities for top-tier protocols like Kima and Velodrome. I combine high-speed administrative precision with decentralized expertise to architect order within the blockchain ecosystem."`}
                </motion.p>
            </div>
        </section>
    );
}
