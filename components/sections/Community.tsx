import { FadeIn } from "@/components/FadeIn";
import { JoinCommunityButton } from "@/components/JoinCommunityButton";
import { SocialLinks } from "@/components/SocialLinks";
import { CheckCircle2, Quote, Users } from "lucide-react";

export function Community() {
  const gains = [
    "Access to research and writing support",
    "Opportunities to participate in academic competitions and projects",
    "Mentorship and guidance from experienced historians",
    "Exposure to workshops and skill-building sessions",
    "Access to academic opportunities",
    "A network of like-minded historians across Nigeria",
    "A space to share ideas, ask questions, and grow in confidence"
  ];

  return (
    <section id="community" className="py-24 bg-gradient-to-b from-slate-100/80 via-stone-50 to-zinc-50 dark:bg-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-academic-grid opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Info & Gains */}
          <div className="space-y-12">
            <FadeIn>
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-brand-gold/15 text-primary dark:text-brand-gold text-sm font-bold uppercase tracking-wider">
                  <Users size={16} />
                  Community Building
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                  Our Dear Young Historians <span className="text-primary dark:text-brand-gold">Community</span>
                </h2>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  With over 40 members across Nigeria, including students and graduates of history, our community is a space where they connect, learn from experts, and support one another.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">What members gain:</h3>
                <div className="grid sm:grid-cols-1 gap-4">
                  {gains.map((gain, i) => (
                    <div key={i} className="flex items-start gap-3 group">
                      <CheckCircle2 className="w-6 h-6 text-primary dark:text-brand-gold shrink-0 transition-transform group-hover:scale-110" />
                      <span className="text-zinc-700 dark:text-zinc-300 font-medium">{gain}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="pt-4 space-y-6">
                <JoinCommunityButton
                  size="lg"
                  className="h-16 px-10 text-xl font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all bg-brand-navy text-white dark:bg-brand-gold dark:text-brand-navy"
                  label="Join Our Community"
                />
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Follow us
                  </p>
                  <SocialLinks
                    iconClassName="w-11 h-11 text-zinc-500 hover:text-brand-gold hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Testimonial Card */}
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/10 rounded-full blur-3xl -z-10"></div>
            
            <FadeIn delay={0.4}>
              <div className="bg-brand-navy text-white p-10 rounded-3xl shadow-2xl relative">
                <Quote className="absolute top-6 right-8 w-16 h-16 text-white/10" />
                
                <div className="space-y-8 relative z-10">
                  <h3 className="text-2xl font-bold border-l-4 border-brand-gold pl-4">Member Testimonial</h3>
                  
                  <div className="space-y-6 italic text-zinc-200 text-lg leading-relaxed">
                    <p>
                      "Being a historian, one of the best decisions I have made for my academic growth was joining The Dear Young Historians Community."
                    </p>
                    <p>
                      "This community is more than just a platform; it is purpose-driven, with a clear structure that supports learning, growth, and practical engagement in the field of history."
                    </p>
                    <p>
                      "Our first webinar, held in February, focused on abstract writing, and it greatly empowered me. With the knowledge gained, I submitted an abstract to Delta State University, Abraka, which was accepted, and I went on to present my paper successfully."
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">
                      H
                    </div>
                    <div>
                      <p className="font-bold text-white">History Enthusiast</p>
                      <p className="text-sm text-zinc-400">Community Member</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
