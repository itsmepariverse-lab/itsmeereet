'use client';

import React from 'react';

const marqueeItems = [
    'WEB3 OPERATIONS',
    'COMMUNITY STRATEGY',
    'DECENTRALIZED GOVERNANCE',
    'PROTOCOL SECURITY',
    'ECOSYSTEM GROWTH',
    'PHYSICS SCHOLAR'
];

export default function Marquee() {
    return (
        <div className="relative w-full py-2 bg-nebula-pink overflow-hidden z-40 border-y border-white/10 mt-16 md:mt-20">
            <div className="flex animate-marquee whitespace-nowrap">
                {[...Array(4)].map((_, groupIndex) => (
                    <div key={groupIndex} className="flex shrink-0">
                        {marqueeItems.map((item, i) => (
                            <span
                                key={i}
                                className="text-[10px] md:text-xs font-heading font-black tracking-[0.3em] text-obsidian px-8 py-1"
                            >
                                {item}
                                <span className="ml-8 text-black/30">/</span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
