import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { JoinCommunityButton } from "@/components/JoinCommunityButton";
import { Button, buttonVariants } from "@/components/ui/button";
import { HOME_SECTIONS } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { ArrowRight, Users, GraduationCap, Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className='pt-24 flex items-center bg-brand-navy relative overflow-hidden text-white'>
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none'>
        <div className='absolute -top-[20%] -left-[10%] w-[50%] h-[70%] rounded-full bg-brand-gold blur-[120px]' />
        <div className='absolute bottom-[10%] -right-[10%] w-[40%] h-[60%] rounded-full bg-brand-gold blur-[100px]' />
        <div className='absolute inset-0 bg-academic-grid opacity-30' />
      </div>

      <div className='max-w-7xl mx-auto px-6 py-16 md:py-32 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full min-h-[calc(100vh-80px)] text-white'>
        <FadeIn>
          <div className='text-white space-y-8 max-w-2xl text-left'>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-gold text-sm font-semibold backdrop-blur-sm'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75' />
                <span className='relative inline-flex rounded-full h-2 w-2 bg-brand-gold' />
              </span>
              Empowering the Next Generation of Historians
            </div>

            <h1 className='text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-white'>
              Where History Meets <br />
              <span className='text-brand-gold'>Academic Excellence</span>
            </h1>

            <p className='text-lg md:text-xl text-white/90 leading-relaxed max-w-xl'>
              The Young Historians Initiative supports undergraduate students
              and recent graduates through research development, mentorship, and
              global academic opportunities.
            </p>

            <div className='flex flex-wrap gap-4 pt-4'>
              <JoinCommunityButton
                size='lg'
                className='h-14 px-8 text-base font-bold bg-brand-gold text-brand-navy hover:bg-white transition-all rounded-full group'
              >
                Join Community{" "}
                <Users className='ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform' />
              </JoinCommunityButton>
              <Link
                href={HOME_SECTIONS.programs}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-14 px-8 text-base font-bold border-white/20 text-white hover:bg-white/10 rounded-full group",
                )}
              >
                Explore Programs{" "}
                <GraduationCap className='ml-2 w-5 h-5 group-hover:scale-110 transition-transform' />
              </Link>
              <Link
                href={HOME_SECTIONS.competition}
                className='w-full sm:w-auto'
              >
                <Button
                  size='lg'
                  variant='ghost'
                  className='h-14 px-8 text-base font-bold text-white hover:text-zinc-200 hover:bg-transparent flex items-center gap-2 group'
                >
                  <Trophy className='w-5 h-5 text-brand-gold' /> Upcoming
                  Competition{" "}
                  <ArrowRight className='w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all' />
                </Button>
              </Link>
            </div>

            <div className='pt-8 flex flex-wrap items-center gap-6 sm:gap-8 border-t border-white/10'>
              <div className='space-y-1'>
                <p className='text-2xl font-bold text-white'>40+</p>
                <p className='text-xs text-zinc-300 uppercase tracking-widest'>
                  Community Members
                </p>
              </div>
              <div className='w-px h-10 bg-white/10 hidden sm:block' />
              <div className='space-y-1'>
                <p className='text-2xl font-bold text-white'>12+</p>
                <p className='text-xs text-zinc-300 uppercase tracking-widest'>
                  Workshops Held
                </p>
              </div>
              <div className='w-px h-10 bg-white/10 hidden sm:block' />
              <div className='space-y-1'>
                <p className='text-2xl font-bold text-white'>20+</p>
                <p className='text-xs text-zinc-300 uppercase tracking-widest'>
                  Partner Unis
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className='relative group'>
            <div className='absolute inset-0 bg-brand-gold/20 rounded-3xl blur-3xl group-hover:bg-brand-gold/30 transition-all duration-700' />
            <div className='relative bg-white/5 backdrop-blur-2xl p-2 rounded-[2rem] border border-white/10 shadow-2xl overflow-hidden'>
              <div className='aspect-[4/5] rounded-3xl overflow-hidden bg-brand-navy/50 relative'>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className='w-full h-full object-cover object-center'
                >
                  <source src='/video/demo.mp4' type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
                <div className='absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/40 to-transparent' />

                <div className='absolute bottom-0 left-0 right-0 p-8 z-10 space-y-4'>
                  <div className='w-14 h-14 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold backdrop-blur-md'>
                    <GraduationCap size={28} />
                  </div>
                  <h3 className='text-2xl font-bold text-white'>
                    Next Generation Research
                  </h3>
                  <p className='text-zinc-300 text-sm leading-relaxed'>
                    Bridging the gap between undergraduate study and
                    professional academic excellence.
                  </p>
                  <div className='grid grid-cols-2 gap-3 pt-2'>
                    <div className='p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
                      <p className='text-[10px] text-zinc-400 uppercase font-bold tracking-tighter'>
                        Current Theme
                      </p>
                      <p className='text-brand-gold font-bold text-sm'>
                        African Historiography
                      </p>
                    </div>
                    <div className='p-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-sm'>
                      <p className='text-[10px] text-zinc-400 uppercase font-bold tracking-tighter'>
                        Next Workshop
                      </p>
                      <p className='text-brand-gold font-bold text-sm'>
                        June 2026
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href={HOME_SECTIONS.competition}
              className='absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-2xl border border-zinc-100 dark:border-zinc-800 hidden md:block hover:-translate-y-1 transition-transform'
            >
              <div className='flex items-center gap-4'>
                <div className='w-12 h-12 rounded-full bg-green-100 dark:bg-green-950/30 flex items-center justify-center text-green-600 dark:text-green-400'>
                  <Trophy size={24} />
                </div>
                <div>
                  <p className='text-sm font-bold text-zinc-900 dark:text-white'>
                    National Competition
                  </p>
                  <p className='text-xs text-zinc-500 dark:text-zinc-400'>
                    Entries open for 2026
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
