import client from "@/tina/__generated__/client";
import HomeClient from '@/components/HomeClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Reet Kumari | Operations Executive',
    description: 'Operations Executive & Administrative Coordinator specializing in workflow optimization and efficiency.',
    robots: {
        index: true,
        follow: true,
    },
};

export default async function Home() {
    // Fetch data from TinaCMS
    const profileResponse = await client.queries.profile({ relativePath: "index.md" });
    const declarationResponse = await client.queries.declaration({ relativePath: "index.md" });

    // For now, we'll use placeholder data for other sections
    // You can add these queries once you create the content files
    const profile = profileResponse.data.profile;
    const declaration = declarationResponse.data.declaration;

    return (
        <HomeClient
            profile={profile}
            experience={[]}
            education={[]}
            skills={[]}
            hobbies={[]}
            declaration={declaration}
        />
    );
}
