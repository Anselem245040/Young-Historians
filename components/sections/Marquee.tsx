import { FadeIn } from "@/components/FadeIn";

const keywords = [
  "Academic Excellence", "Global Research", "Mentorship", "Historic Preservation", "Community", "Scholarship",
  "Academic Excellence", "Global Research", "Mentorship", "Historic Preservation", "Community", "Scholarship",
  "Academic Excellence", "Global Research", "Mentorship", "Historic Preservation", "Community", "Scholarship"
];

export function Marquee() {
  return (
    <section className="py-8 bg-brand-navy border-y border-white/10 overflow-hidden relative shadow-xl">
      {/* Gradient fading edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-navy to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-navy to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] cursor-default">
        <div className="flex items-center gap-16 px-8 whitespace-nowrap">
          {keywords.map((word, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-xl md:text-3xl font-extrabold text-white/30 uppercase tracking-[0.2em]">{word}</span>
              <span className="text-brand-gold text-2xl opacity-80">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
