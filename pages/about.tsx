import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { About } from "@/components/sections/About";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-1 pt-24">
        <About />
      </main>
      <Footer />
    </div>
  );
}
