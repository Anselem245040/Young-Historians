"use client";

import { FadeIn } from "@/components/FadeIn";
import { Button } from "@/components/ui/button";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Calendar, GraduationCap, ArrowRight, PlayCircle, BookOpen, Search } from "lucide-react";

const workshops = [
  {
    id: 1,
    title: "Understanding Calls for Papers for Historians, and How to Write a Good Abstract",
    date: "February 7th",
    attendees: "30+",
    icon: <BookOpen className="w-6 h-6" />,
    summary: "A deep dive into abstract writing and academic publications for historians.",
    fullContent: (
      <div className="space-y-6">
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          With over 30+ members in attendance, we learned about understanding calls for papers, how they apply to historians, and how to write a good abstract.
        </p>
        <div className="space-y-4">
          <h4 className="font-bold text-zinc-900 dark:text-white text-lg">Key Highlights:</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
              <p className="text-zinc-700 dark:text-zinc-300"><strong>What is a CFP?</strong> An invitation to submit research papers, articles, or presentations for conferences or journals. It is a way for organizers to solicit contributions on a specific topic.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
              <p className="text-zinc-700 dark:text-zinc-300"><strong>Importance:</strong> Vital for historians to share research ideas on a particular theme and get the opportunity to be published.</p>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0"></div>
              <p className="text-zinc-700 dark:text-zinc-300"><strong>The Abstract:</strong> It is the lens through which a reader can quickly see the value and essence of your work.</p>
            </li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Identifying Your Research Interest as a Historian",
    date: "March 28th",
    attendees: "30+",
    icon: <Search className="w-6 h-6" />,
    summary: "Discovering intellectual curiosity and recurring research patterns.",
    fullContent: (
      <div className="space-y-6">
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          A research interest is a recurring intellectual curiosity about a problem, process, or phenomenon that one wants to understand more deeply. It is not simply a topic, a specialisation, or expertise.
        </p>
        <div className="space-y-4">
          <h4 className="font-bold text-zinc-900 dark:text-white text-lg">Key Distinctions:</h4>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <p className="font-bold text-primary dark:text-brand-gold">Curiosity</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Begins with simply liking a topic.</p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <p className="font-bold text-primary dark:text-brand-gold">Research Interest</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">Develops when one continues to ask questions about a problem.</p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <p className="font-bold text-primary dark:text-brand-gold">Specialisation</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">When one’s work consistently focuses on a particular area.</p>
            </div>
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-100 dark:border-zinc-800">
              <p className="font-bold text-primary dark:text-brand-gold">Expertise</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">When one becomes recognised as knowledgeable in that field.</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "What Research Methodology is Permissible in History?",
    date: "April 25th",
    attendees: "40+",
    icon: <GraduationCap className="w-6 h-6" />,
    summary: "Demystifying methodology vs methods for researchers.",
    fullContent: (
      <div className="space-y-6">
        <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
          With 40+ participants, we focused on questions many history students struggle with, especially during their final year, because methodology is often not clearly explained.
        </p>
        <div className="space-y-4">
          <h4 className="font-bold text-zinc-900 dark:text-white text-lg">Methodology vs Method:</h4>
          <p className="text-zinc-600 dark:text-zinc-400">
            Methodology is the overall approach that guides your research, while methods are the specific tools you use to collect and analyze data.
          </p>
          <div className="p-6 bg-brand-navy text-white rounded-2xl">
             <p className="italic">"A brilliant researcher and historian walked participants through it in a way that made it simple and practical."</p>
          </div>
        </div>
      </div>
    )
  }
];

export function Workshops() {
  return (
    <section id="workshops" className="py-24 bg-gradient-to-br from-stone-50 via-zinc-50 to-amber-50/20 dark:bg-[#0A0A0B] dark:from-[#0A0A0B] dark:via-[#0A0A0B] dark:to-[#0A0A0B] relative overflow-hidden">
      <div className="absolute inset-0 bg-academic-grid opacity-20 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Heading */}
          <div className="lg:w-1/3 space-y-6">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-brand-gold/15 text-primary dark:text-brand-gold text-sm font-bold uppercase tracking-wider">
                <GraduationCap size={16} />
                No. 2 Training
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-white leading-tight">
                Academic Workshops <br />
                <span className="text-primary dark:text-brand-gold">& Training</span>
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                We hold monthly workshops where experienced historians, including postgraduate students, scholars, and lecturers, lead structured learning sessions for young historians.
              </p>
            </FadeIn>
          </div>

          {/* Right Column: Workshop List */}
          <div className="lg:w-2/3 grid gap-6">
            {workshops.map((workshop, i) => (
              <FadeIn key={workshop.id} delay={i * 0.1}>
                <Dialog>
                  <DialogTrigger 
                    render={
                      <button className="w-full text-left bg-white dark:bg-zinc-900 p-6 md:p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800/50 hover:shadow-md transition-all group flex flex-col md:flex-row gap-6 items-center">
                        <div className="w-16 h-16 rounded-2xl bg-zinc-50 dark:bg-zinc-800 flex items-center justify-center text-primary dark:text-brand-gold shrink-0 group-hover:bg-primary dark:group-hover:bg-brand-gold group-hover:text-white dark:group-hover:text-brand-navy transition-colors">
                          {workshop.icon}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-3 text-xs font-bold text-primary dark:text-brand-gold uppercase tracking-widest">
                            <Calendar size={14} />
                            {workshop.date}
                            <span className="text-zinc-300 dark:text-zinc-700">•</span>
                            <span className="text-zinc-400 dark:text-zinc-500">{workshop.attendees} Attendees</span>
                          </div>
                          <h3 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-primary dark:group-hover:text-brand-gold transition-colors">
                            {workshop.title}
                          </h3>
                          <p className="text-zinc-500 dark:text-zinc-400 line-clamp-1">{workshop.summary}</p>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-zinc-50 dark:bg-zinc-850 flex items-center justify-center text-zinc-400 group-hover:bg-primary dark:group-hover:bg-brand-gold group-hover:text-white dark:group-hover:text-brand-navy transition-all shrink-0">
                          <ArrowRight size={20} />
                        </div>
                      </button>
                    } 
                  />
                  <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800">
                    <DialogHeader>
                      <div className="flex items-center gap-2 text-primary dark:text-brand-gold font-bold text-sm uppercase mb-2">
                        <Calendar size={16} />
                        {workshop.date}
                      </div>
                      <DialogTitle className="text-2xl font-bold text-zinc-900 dark:text-white">{workshop.title}</DialogTitle>
                      <DialogDescription className="text-zinc-500 dark:text-zinc-400 pt-2 font-medium">
                        Workshop Insights & Highlights
                      </DialogDescription>
                    </DialogHeader>
                    <div className="py-6 border-t dark:border-zinc-800 mt-6">
                      {workshop.fullContent}
                    </div>
                    <div className="flex justify-end gap-3 pt-6 border-t dark:border-zinc-800">
                      <Button variant="outline" className="gap-2">
                         <PlayCircle size={18} /> Watch Recording
                      </Button>
                      <Button className="gap-2">
                         <BookOpen size={18} /> Download Materials
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
