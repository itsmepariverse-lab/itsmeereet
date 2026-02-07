import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reet Kumari | Operations Executive',
    description: 'Operations Executive & Administrative Coordinator specializing in workflow optimization and efficiency.',
    robots: {
        index: true,
        follow: true,
    },
};

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex items-center justify-center">
            <div className="container mx-auto px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    Reet Kumari
                </h1>
                <p className="text-2xl md:text-3xl text-gray-300 mb-8">
                    Operations Executive & Administrative Coordinator
                </p>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
                    TinaCMS migration complete! Visit the{" "}
                    <a
                        href="/admin/index.html"
                        className="text-blue-400 hover:text-blue-300 underline font-semibold"
                    >
                        admin panel
                    </a>{" "}
                    to start adding your content.
                </p>
                <div className="flex gap-4 justify-center">
                    <a
                        href="/admin/index.html"
                        className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                        Open CMS
                    </a>
                    <a
                        href="/web3"
                        className="px-8 py-3 bg-gray-800 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                    >
                        Web3 Dashboard
                    </a>
                </div>
            </div>
        </div>
    );
}
