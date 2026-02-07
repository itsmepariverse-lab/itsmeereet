export const metadata = {
    title: 'Sanity Studio',
    description: 'Sanity Studio Content Management System',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
