import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Reet Kumari - Portfolio",
    description: "Portfolio showcasing Reet Kumari's work and projects",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
