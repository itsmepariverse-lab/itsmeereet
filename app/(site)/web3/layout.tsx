import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reet Kumari | Web3 Operations Expert',
    description: 'Web3 Operations Expert & Community Strategist.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function Web3Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-obsidian text-white min-h-screen">
            {children}
        </div>
    );
}
