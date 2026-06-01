import { FadeIn } from "@/components/FadeIn";
import { Users, GraduationCap, BookOpen, School } from "lucide-react";

const stats = [
  {
    label: "Workshops Held",
    value: "12+",
    icon: <BookOpen className="w-8 h-8" />
  },
  {
    label: "Students Reached",
    value: "500+",
    icon: <Users className="w-8 h-8" />
  },
  {
    label: "Papers Presented",
    value: "45+",
    icon: <GraduationCap className="w-8 h-8" />
  },
  {
    label: "Universities",
    value: "20+",
    icon: <School className="w-8 h-8" />
  }
];

export function Impact() {
  return (
    <section id="impact" className="py-24 bg-brand-navy dark:bg-zinc-950 relative overflow-hidden text-white">
      <div className="absolute inset-0 bg-academic-grid opacity-20 pointer-events-none"></div>
      {/* Abstract Background Element for academic feel */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-brand-gold blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-20">
            <h2 className="text-brand-gold font-bold tracking-widest uppercase text-xs">Our Impact</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Measuring our <span className="text-brand-gold">Progress</span>
            </h3>
            <p className="text-zinc-300 text-lg">
              Through consistent effort and dedication, we are building a more guided and visible community for young historians.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group text-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tighter">
                  {stat.value}
                </h4>
                <p className="text-zinc-300 font-medium uppercase tracking-widest text-xs">
                  {stat.label}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
        
        {/* Visual proof placeholder */}
        <FadeIn delay={0.5}>
          <div className="mt-20 p-4 rounded-[2rem] bg-white/5 border border-white/10 flex flex-wrap justify-center gap-8 items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             <p className="text-zinc-400 font-bold uppercase tracking-widest text-xs w-full text-center mb-4">Trusted by scholars from</p>
             <div className="h-8 w-32 bg-white/10 rounded"></div>
             <div className="h-8 w-24 bg-white/10 rounded"></div>
             <div className="h-8 w-40 bg-white/10 rounded"></div>
             <div className="h-8 w-28 bg-white/10 rounded"></div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
