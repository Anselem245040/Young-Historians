import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Impact } from "@/components/sections/Impact";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-1 pt-24">
        <Impact />
      </main>
      <Footer />
    </div>
  );
}
