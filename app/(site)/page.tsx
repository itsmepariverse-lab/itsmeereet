import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import Header from '@/components/ui/Header';
import Scene from '@/components/canvas/Scene';
import Hero from '@/components/sections/Hero';
import BrandBio from '@/components/sections/BrandBio';
import Timeline from '@/components/sections/Timeline';
import Skills from '@/components/sections/Skills';
import TechGrid from '@/components/sections/TechGrid';
import Footer from '@/components/ui/Footer';
import BackgroundParticles from '@/components/ui/BackgroundParticles';
import Marquee from '@/components/ui/Marquee';

export const dynamic = "force-dynamic";

export const metadata = {
  title: 'Reet Kumari | Web3 Operations',
  description: 'Web3 Operations Expert & Community Strategist',
};

export default async function Home() {
  const filePath = path.join(process.cwd(), 'content', 'web3', 'index.md');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);

  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-obsidian text-white">
      <div className="grain-overlay" />
      <div className="aurora-bg" />
      <BackgroundParticles />
      <Header />
      <Marquee items={data.marquee?.items?.filter((item: any): item is string => item !== null) || []} />
      <Scene />

      <div className="relative z-10">
        <Hero data={data.hero || {}} />
        <BrandBio data={data.brand_bio || {}} />
        <Timeline items={data.timeline?.filter((t: any) => t !== null) || []} />
        <Skills data={data.expertise?.filter((t: any) => t !== null) || []} />
        <TechGrid data={data.tech_stack?.filter((t: any) => t !== null) || []} />
        <Footer />
      </div>
    </main>
  );
}
