import { FadeIn } from "@/components/FadeIn";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Trophy, Briefcase, GraduationCap, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { HOME_SECTIONS } from "@/lib/site-config";

const programs = [
  {
    title: "Community Building",
    description: "A space for young historians to connect, share opportunities, and build confidence through peer support.",
    icon: <Users size={24} />,
    link: HOME_SECTIONS.community,
    linkText: "Join Community"
  },
  {
    title: "Monthly Workshops",
    description: "Structured learning sessions led by experienced scholars on research, writing, and academic skills.",
    icon: <Calendar size={24} />,
    link: HOME_SECTIONS.workshops,
    linkText: "View Workshops"
  },
  {
    title: "National History Competition",
    description: "An annual intellectual challenge that celebrates research excellence and historical analysis.",
    icon: <Trophy size={24} />,
    link: HOME_SECTIONS.competition,
    linkText: "Enter Competition"
  },
  {
    title: "Mentorship & Career Support",
    description: "Pairing graduates with experienced historians for research guidance and professional development.",
    icon: <Briefcase size={24} />,
    link: HOME_SECTIONS.team,
    linkText: "Meet the Team"
  },
  {
    title: "Academic Opportunities",
    description: "Access to scholarships, conferences, calls for papers, and global grants tailored for historians.",
    icon: <GraduationCap size={24} />,
    link: HOME_SECTIONS.opportunities,
    linkText: "Explore More"
  }
];

export function Programs() {
  return (
    <section id="programs" className="py-24 bg-gradient-to-b from-slate-100/80 via-stone-50 to-zinc-50 dark:bg-[#0A0A0B] dark:from-[#0A0A0B] dark:via-[#0A0A0B] dark:to-[#0A0A0B] relative overflow-hidden">
      <div className="absolute inset-0 bg-academic-grid opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <h2 className="text-primary dark:text-brand-gold font-bold tracking-widest uppercase text-xs">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Empowering through <span className="text-primary dark:text-brand-gold">Action</span>
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Our initiatives are designed to bridge the gap between classroom learning and professional academic excellence.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <FadeIn key={program.title} delay={index * 0.1}>
              <Card className="group hover:shadow-2xl transition-all duration-500 border border-zinc-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 h-full flex flex-col overflow-hidden relative">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  {program.icon}
                </div>
                <CardHeader className="relative pt-8">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 dark:bg-brand-gold/10 flex items-center justify-center text-primary dark:text-brand-gold mb-6 group-hover:bg-primary dark:group-hover:bg-brand-gold group-hover:text-white dark:group-hover:text-brand-navy transition-all duration-500 transform group-hover:rotate-6">
                    {program.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-zinc-900 dark:text-white group-hover:text-primary dark:group-hover:text-brand-gold transition-colors">
                    {program.title}
                  </CardTitle>
                  <CardDescription className="text-base pt-4 leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto pb-8">
                  <Link href={program.link} className="text-primary dark:text-brand-gold font-bold flex items-center gap-2 group/link border-b-2 border-transparent hover:border-brand-gold w-fit transition-all pb-1">
                    {program.linkText} <ArrowRight size={18} className="transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
