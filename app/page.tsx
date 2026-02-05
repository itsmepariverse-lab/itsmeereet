import Header from '@/components/ui/Header';
import Scene from '@/components/canvas/Scene';
import Hero from '@/components/sections/Hero';
import BrandBio from '@/components/sections/BrandBio';
import Timeline from '@/components/sections/Timeline';
import Skills from '@/components/sections/Skills';
import TechGrid from '@/components/sections/TechGrid';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen overflow-x-hidden bg-obsidian text-white">
      <Header />
      <Scene />

      <div className="relative z-10">
        <Hero />
        <BrandBio />
        <Timeline />
        <Skills />
        <TechGrid />
        <Footer />
      </div>
    </main>
  );
}
