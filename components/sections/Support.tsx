import { FadeIn } from "@/components/FadeIn";
import { DonationModal } from "@/components/DonationModal";
import { Heart, ShieldCheck, Zap } from "lucide-react";

export function Support() {
  return (
    <section id="support" className="py-24 bg-gradient-to-b from-slate-100/80 via-stone-50 to-zinc-50 dark:bg-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-academic-grid opacity-30 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-navy dark:bg-zinc-900 rounded-[3rem] p-10 md:p-20 relative overflow-hidden shadow-2xl">
          {/* Decorative gradients */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/10 rounded-full blur-[120px] -z-0 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-3/5 space-y-8">
              <FadeIn>
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-brand-gold text-sm font-bold uppercase tracking-wider">
                    <Heart size={16} />
                    Support Our Mission
                  </div>
                  <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                    Invest in the <br />
                    <span className="text-brand-gold">Future of History</span>
                  </h2>
                  <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl">
                    Your contribution helps us provide research grants, organize workshops, and sustain a community that empowers the next generation of African historians.
                  </p>
                </div>
              </FadeIn>

              <div className="grid sm:grid-cols-2 gap-6">
                 {[
                   { icon: <ShieldCheck className="text-brand-gold" />, text: "Direct Impact on Education" },
                   { icon: <Zap className="text-brand-gold" />, text: "Sponsor Research Projects" }
                 ].map((item, i) => (
                   <FadeIn key={i} delay={0.2 + i * 0.1}>
                     <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                        {item.icon}
                        <span className="text-white font-medium">{item.text}</span>
                     </div>
                   </FadeIn>
                 ))}
              </div>
            </div>

            <div className="lg:w-2/5 w-full">
              <FadeIn delay={0.4}>
                <div className="bg-white dark:bg-zinc-800 p-10 rounded-[2.5rem] shadow-xl text-center space-y-8">
                   <div className="space-y-2">
                      <h4 className="text-2xl font-black text-zinc-900 dark:text-white">Make a Difference</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">Every donation, no matter the size, fuels our academic programs.</p>
                   </div>
                   
                   <DonationModal triggerText="Sponsor a Historian" />
                   
                   <p className="text-xs text-zinc-400 dark:text-zinc-500">
                      Secure payment processing via Bank Transfer or Card.
                   </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
