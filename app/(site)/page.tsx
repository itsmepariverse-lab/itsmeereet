
import client from "@/lib/tina-client";
import HomeClient from '@/components/HomeClient';
import type { Metadata } from 'next';

export const dynamic = "force-dynamic";

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
    const experienceResponse = await client.queries.experienceConnection();
    const educationResponse = await client.queries.educationConnection();
    const skillsResponse = await client.queries.skillConnection();
    const hobbiesResponse = await client.queries.hobbyConnection();

    const profile = profileResponse.data.profile;
    const declaration = declarationResponse.data.declaration;

    // Transform connection data to arrays
    const experience = experienceResponse.data.experienceConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];
    const education = educationResponse.data.educationConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];
    const skills = skillsResponse.data.skillConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];
    const hobbies = hobbiesResponse.data.hobbyConnection.edges?.map(edge => edge?.node).filter(Boolean) || [];

    // Sort experience and education by order if available
    // Note: Assuming 'order' field exists in schema as per HomeClient interfaces, otherwise strict sort might need check
    experience.sort((a: any, b: any) => (a.order || 99) - (b.order || 99));
    education.sort((a: any, b: any) => (a.order || 99) - (b.order || 99));

    return (
        <HomeClient
            profile={{
                name: profile.name || "",
                role: profile.role || "",
                summary: profile.summary || "",
                email: profile.email || "",
                phone: profile.phone || "",
                target_roles: ((profile as any).target_roles || []).filter((r: any): r is string => r !== null),
                credentials: ((profile as any).credentials || []).filter((c: any): c is { label: string; value: string } => c !== null && !!c.label && !!c.value).map((c: any) => ({ label: c.label!, value: c.value! })),
                strengths: (profile.strengths || []).filter((s: any): s is { title: string; description: string } => s !== null && !!s.title && !!s.description).map((s: any) => ({ title: s.title!, description: s.description! })),
            }}
            experience={experience as any}
            education={education as any}
            skills={skills as any}
            hobbies={hobbies as any}
            declaration={{
                statement: declaration.statement || "",
                name: declaration.name || "",
            }}
        />
    );
}
