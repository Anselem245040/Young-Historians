import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Programs } from "@/components/sections/Programs";

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 flex flex-col font-sans transition-colors duration-300">
      <Navbar />
      <main className="flex-1 pt-24">
        <Programs />
      </main>
      <Footer />
    </div>
  );
}
