'use client';

import { TinaCMS } from "tinacms";
import { useEffect, useState } from "react";

export default function AdminPage() {
    const [cms, setCms] = useState<TinaCMS | null>(null);

    useEffect(() => {
        const initCMS = async () => {
            const { TinaCMS } = await import("tinacms");

            const tinaCMS = new TinaCMS({
                enabled: true,
                sidebar: true,
            });

            setCms(tinaCMS);
        };

        initCMS();
    }, []);

    if (!cms) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-black text-white">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                    <p>Loading TinaCMS...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Content Management</h1>
                <p className="text-gray-400 mb-8">
                    Manage your portfolio content using TinaCMS.
                </p>
                <div className="bg-gray-900 rounded-lg p-6">
                    <p className="text-sm text-gray-500">
                        TinaCMS is initializing. Please visit the{" "}
                        <a
                            href="/admin/index.html"
                            className="text-blue-400 hover:text-blue-300 underline"
                        >
                            admin panel
                        </a>{" "}
                        to start editing.
                    </p>
                </div>
            </div>
        </div>
    );
}
