"use client";

import { useEffect, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { Trophy, Calendar, CheckCircle2, ArrowRight, Clock } from "lucide-react";

export function Competition() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set a mock target date for the countdown (e.g., 30 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const phases = [
    { title: "Abstract Submission", date: "June 1 – June 15, 2026", status: "Upcoming" },
    { title: "Full Paper Submission", date: "July 1 – July 20, 2026", status: "Upcoming" },
    { title: "Final Presentation", date: "August 10, 2026", status: "Upcoming" },
  ];

  return (
    <section id="competition" className="py-24 bg-gradient-to-br from-stone-50 via-zinc-50 to-amber-50/20 dark:bg-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-academic-grid opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info */}
          <div className="space-y-10">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-brand-gold/15 text-primary dark:text-brand-gold text-sm font-bold uppercase tracking-wider">
                  <Trophy size={16} />
                  Annual Competition
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                   National History <span className="text-primary dark:text-brand-gold">Competition 2026</span>
                </h2>
                <div className="p-6 bg-zinc-50 dark:bg-zinc-900 border-l-4 border-brand-gold rounded-r-2xl space-y-3">
                  <p className="font-bold text-zinc-900 dark:text-white text-xl">Theme: "The Digital Turn in African Historiography"</p>
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    This year's competition challenges young historians to explore how digital tools, archives, and platforms are reshaping the way we document and interpret African history in the 21st century.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Competition Phases:</h3>
                <div className="space-y-4">
                  {phases.map((phase, i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-zinc-250 dark:border-zinc-800 rounded-2xl hover:border-primary/30 dark:hover:border-brand-gold/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-primary dark:text-brand-gold font-bold">
                          {i + 1}
                        </div>
                        <div>
                          <p className="font-bold text-zinc-900 dark:text-white">{phase.title}</p>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400">{phase.date}</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">{phase.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="space-y-6">
                 <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">Prizes & Recognition:</h3>
                 <ul className="grid sm:grid-cols-2 gap-4">
                    {[
                      "Cash Awards for Top 3",
                      "Publication Opportunities",
                      "Academic Mentorship",
                      "Certificates of Excellence",
                      "Featured Spotlight",
                      "Conference Sponsorship"
                    ].map((prize, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0" />
                        <span className="font-medium">{prize}</span>
                      </li>
                    ))}
                 </ul>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Countdown & CTA */}
          <FadeIn delay={0.4}>
            <div className="sticky top-32 space-y-8">
              <div className="bg-brand-navy text-white p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 rounded-full blur-[100px]"></div>
                
                <div className="relative z-10 space-y-8 text-center">
                  <h3 className="text-2xl font-bold uppercase tracking-widest text-brand-gold">Time Remaining</h3>
                  
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { label: "Days", value: timeLeft.days },
                      { label: "Hours", value: timeLeft.hours },
                      { label: "Mins", value: timeLeft.minutes },
                      { label: "Secs", value: timeLeft.seconds },
                    ].map((item, i) => (
                      <div key={i} className="space-y-2">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 md:p-6 border border-white/10">
                          <p className="text-3xl md:text-4xl font-black text-brand-gold">{item.value.toString().padStart(2, '0')}</p>
                        </div>
                        <p className="text-[10px] uppercase font-bold tracking-tighter text-zinc-400">{item.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 space-y-6">
                    <p className="text-zinc-300">Abstract submission deadline: <span className="text-white font-bold">June 15, 2024</span></p>
                    <Button size="lg" className="w-full h-16 text-xl font-bold bg-brand-gold text-brand-navy hover:bg-white transition-all rounded-2xl shadow-xl shadow-brand-gold/20 group">
                      Call for Abstracts <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <p className="text-xs text-zinc-400">Eligibility: Undergraduate history students & recent graduates (within 2 years)</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-50 dark:bg-zinc-900 p-8 rounded-3xl border border-dashed border-zinc-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center gap-3 text-primary dark:text-brand-gold">
                  <Clock size={24} />
                  <p className="font-bold text-zinc-900 dark:text-white">Important Note</p>
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  All submissions must be original works. Plagiarism will result in immediate disqualification. Guidelines for paper formatting will be sent to successful abstract applicants.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
