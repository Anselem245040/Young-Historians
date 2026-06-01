import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { teamMembers } from "@/lib/team-data";

export function Team() {
  return (
    <section
      className='py-24 bg-gradient-to-b from-slate-100/80 via-stone-50 to-zinc-50 dark:bg-[#0A0A0B] dark:from-[#0A0A0B] dark:via-[#0A0A0B] dark:to-[#0A0A0B] relative overflow-hidden'
      id='team'
    >
      <div className='absolute top-0 right-0 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none' />

      <div className='max-w-7xl mx-auto px-6 relative z-10'>
        <FadeIn>
          <div className='text-center max-w-2xl mx-auto mb-16 space-y-6'>
            <div className='inline-flex items-center justify-center px-4 py-2 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-sm font-bold tracking-wide uppercase'>
              Leadership
            </div>
            <h2 className='text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-white tracking-tight'>
              Meet The{" "}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-brand-navy to-brand-gold dark:from-brand-gold dark:to-amber-200'>
                Team
              </span>
            </h2>
            <p className='text-lg text-zinc-600 dark:text-zinc-400'>
              The people behind Dear Young Historians—supporting the next
              generation of historians across Nigeria and beyond.
            </p>
          </div>
        </FadeIn>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6'>
          {teamMembers.map((member, i) => (
            <FadeIn key={member.image} delay={i * 0.1}>
              <div className='group relative bg-white dark:bg-[#111113] rounded-[2rem] border border-zinc-200 dark:border-white/5 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col overflow-hidden'>
                <div className='aspect-square overflow-hidden relative bg-zinc-100 dark:bg-white/5'>
                  <Image
                    src={member.image}
                    alt={`${member.name} — ${member.role}`}
                    fill
                    className='object-cover object-top group-hover:scale-110 transition-transform duration-500'
                    sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw'
                  />
                </div>

                <div className='p-6 space-y-3 text-center flex-1 flex flex-col justify-between'>
                  <div className='space-y-2'>
                    <h3 className='text-lg font-bold text-zinc-900 dark:text-white leading-snug'>
                      {member.name}
                    </h3>
                    <p className='text-xs font-extrabold text-brand-gold uppercase tracking-widest'>
                      {member.role}
                    </p>
                  </div>
                  <p className='text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
