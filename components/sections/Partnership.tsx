import { FadeIn } from "@/components/FadeIn";
import { buttonVariants } from "@/components/ui/button";
import { CONTACT_EMAIL } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Handshake, MessageSquare, Heart, ShieldCheck, Mail, ArrowRight } from "lucide-react";

export function Partnership() {
  const benefits = [
    {
      title: "Shape the Future",
      description: "Directly influence the quality of historical research and education in Africa.",
      icon: <ShieldCheck size={24} />
    },
    {
      title: "Talent Access",
      description: "Connect with the brightest emerging historians and researchers.",
      icon: <Handshake size={24} />
    },
    {
      title: "Brand Visibility",
      description: "Showcase your commitment to academic excellence and cultural preservation.",
      icon: <Heart size={24} />
    }
  ];

  return (
    <section id="partnership" className="py-24 bg-gradient-to-br from-stone-50 via-zinc-50 to-amber-50/20 dark:bg-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-academic-grid opacity-30 pointer-events-none"></div>
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          
          {/* Left: Content */}
          <div className="lg:w-1/2 space-y-10">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-brand-gold/15 text-primary dark:text-brand-gold text-sm font-bold uppercase tracking-wider">
                  <Handshake size={16} />
                  Partnership
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white leading-tight">
                  Support the <span className="text-primary dark:text-brand-gold">Intellectual Journey</span>
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  We believe that history is a collective responsibility. Partner with us to provide the resources and guidance that young historians need to thrive.
                </p>
              </div>
            </FadeIn>

            <div className="grid sm:grid-cols-1 gap-8">
              {benefits.map((benefit, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div className="flex gap-6 group">
                    <div className="w-14 h-14 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-primary dark:text-brand-gold shrink-0 group-hover:bg-primary dark:group-hover:bg-brand-gold group-hover:text-white dark:group-hover:text-brand-navy transition-all duration-500">
                      {benefit.icon}
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-zinc-900 dark:text-white">{benefit.title}</h4>
                      <p className="text-zinc-500 dark:text-zinc-400">{benefit.description}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <FadeIn delay={0.4} className="lg:w-1/2 w-full">
            <div className="bg-zinc-900 dark:bg-zinc-900/50 text-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-transparent dark:border-zinc-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-20"></div>
              
              <div className="relative z-10 space-y-10">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">Become a Partner</h3>
                  <p className="text-zinc-400 text-lg">
                    Whether you're an academic institution, a private organization, or a passionate individual, there's a way for you to contribute.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                    <Mail className="text-brand-gold" />
                    <p className="font-medium text-zinc-300">partnerships@younghistorians.org</p>
                  </div>
                  <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-4">
                    <MessageSquare className="text-brand-gold" />
                    <p className="font-medium text-zinc-300">Request Sponsorship Prospectus</p>
                  </div>
                </div>

                <div className="pt-6">
                   <Link
                     href={`mailto:${CONTACT_EMAIL}?subject=Partnership%20Inquiry`}
                     className={cn(
                       buttonVariants({ size: "lg" }),
                       "w-full h-16 text-lg font-bold bg-brand-gold text-brand-navy hover:bg-white transition-all rounded-2xl group inline-flex"
                     )}
                   >
                     Get in Touch <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                   </Link>
                </div>
                
                <p className="text-center text-zinc-400 text-sm">
                  Join organizations like UNN, HSN, and others supporting historical education.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
