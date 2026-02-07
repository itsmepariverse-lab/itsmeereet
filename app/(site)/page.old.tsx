
import { client } from '@/sanity/lib/client';
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

// 1. Define GROQ queries
const PROFILE_QUERY = `*[_type == "profile"][0]`;
const EXPERIENCE_QUERY = `*[_type == "experience"] | order(order asc)`;
const EDUCATION_QUERY = `*[_type == "education"] | order(order asc)`;
const SKILLS_QUERY = `*[_type == "skill"]`;
const HOBBIES_QUERY = `*[_type == "hobby"]`;
const DECLARATION_QUERY = `*[_type == "declaration"][0]`;

// 2. Fetch data (ISR or Dynamic)
// Use dynamic = 'force-dynamic' if we want real-time updates without deploying, 
// or revalidate for ISR. Sanity content usually wants ISR like revalidate = 60
export const revalidate = 60;

export default async function Home() {
  // Parallel fetching
  const [profile, experience, education, skills, hobbies, declaration] = await Promise.all([
    client.fetch(PROFILE_QUERY),
    client.fetch(EXPERIENCE_QUERY),
    client.fetch(EDUCATION_QUERY),
    client.fetch(SKILLS_QUERY),
    client.fetch(HOBBIES_QUERY),
    client.fetch(DECLARATION_QUERY)
  ]);

  return (
    <HomeClient
      profile={profile}
      experience={experience}
      education={education}
      skills={skills}
      hobbies={hobbies}
      declaration={declaration}
    />
  );
}
