import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Team } from "@/components/sections/Team";
import { Impact } from "@/components/sections/Impact";
import { Community } from "@/components/sections/Community";
import { BlogSection } from "@/components/sections/Blog";
import { Workshops } from "@/components/sections/Workshops";
import { Competition } from "@/components/sections/Competition";
import { Opportunities } from "@/components/sections/Opportunities";
import { Partnership } from "@/components/sections/Partnership";
import { Support } from "@/components/sections/Support";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans transition-colors duration-300">
      <Navbar />

      <main id="main-content" className="flex-1">
        <Hero />
        <Marquee />
        <About />
        <Programs />
        <Team />
        <Workshops />
        <Competition />
        <Opportunities />
        <Impact />
        <Community />
        <BlogSection />
        <Partnership />
        <Support />
      </main>

      <Footer />
    </div>
  );
}
