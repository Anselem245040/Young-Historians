import { FadeIn } from "@/components/FadeIn";
import { BookOpen, Users, Award, Target } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-stone-50 via-zinc-50 to-amber-50/20 dark:bg-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-academic-grid opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* Main About Text */}
        <FadeIn>
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-primary dark:text-brand-gold font-bold tracking-widest uppercase text-xs">Our Story</h2>
                <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                  Bridging the Gap in <br />
                  <span className="text-primary dark:text-brand-gold">Historical Education</span>
                </h3>
              </div>
              
              <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                <p>
                  We are an organisation established to support undergraduate historians and recent history graduates who feel overlooked, uncertain, or underprepared for life beyond the classroom.
                </p>
                <p>
                  Founded by <span className="text-zinc-900 dark:text-white font-bold italic">Romanus Ngozi Gift</span>, a First-Class graduate of History and International Studies from the University of Nigeria, Nsukka, the initiative responds to a clear gap in the discipline.
                </p>
                <p>
                  In Nigeria and beyond, history is often dismissed as impractical. Undergraduate students are rarely exposed to research workshops or clearly defined career pathways. <span className="text-primary dark:text-brand-gold font-bold">This initiative exists to change that narrative.</span>
                </p>
              </div>
              
              <div className="flex gap-4 pt-4">
                 <div className="flex flex-col">
                    <span className="text-2xl font-black text-zinc-900 dark:text-white">1st Class</span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Foundation</span>
                 </div>
                 <div className="w-px h-10 bg-zinc-200 dark:bg-zinc-800"></div>
                 <div className="flex flex-col">
                    <span className="text-2xl font-black text-zinc-900 dark:text-white">UNN</span>
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Roots</span>
                 </div>
              </div>
            </div>

            <div className="grid gap-8">
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-8 rounded-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent transition-transform duration-700 group-hover:scale-105"></div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center text-primary dark:text-brand-gold">
                    <BookOpen size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-white">Dear Young Historians 🌱</h4>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    At the heart of our organisation is a practical guide written for undergraduates. The book addresses skill-building, African historiography, and access to scholarships.
                  </p>
                </div>
              </div>

              <div className="bg-brand-navy dark:bg-zinc-900 text-white p-8 rounded-3xl space-y-4 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-bl-full -z-0 translate-x-8 -translate-y-8"></div>
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold">
                    <Users size={24} />
                  </div>
                  <h4 className="text-2xl font-bold text-white">The Community</h4>
                  <p className="text-zinc-300">
                    Beyond the book, we operate a space where young historians connect, share opportunities, collaborate, and build confidence within academia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.1}>
            <div className="p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 space-y-6">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Target size={24} />
              </div>
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Our Vision</h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To build a resilient community of young historians across Africa, equipped with the tools, confidence, and visibility to lead intellectual conversations and thrive professionally.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="p-10 rounded-[2.5rem] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 space-y-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary dark:text-brand-gold">
                <Award size={24} />
              </div>
              <h4 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">Our Mission</h4>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                To provide mentorship, practical workshops, and career resources that empower history graduates to excel in research, writing, and professional practice.
              </p>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
