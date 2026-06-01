"use client";

import { useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Calendar, ExternalLink, Bookmark, GraduationCap, Globe, BookOpen } from "lucide-react";

const opportunities = [
  {
    id: 1,
    title: "Global South History Scholarship",
    type: "Scholarship",
    provider: "Oxford African Studies Centre",
    deadline: "August 30, 2024",
    location: "Oxford, UK / Remote",
    link: "#",
    category: "Grant"
  },
  {
    id: 2,
    title: "Emerging Historians Conference",
    type: "Conference",
    provider: "Historical Society of Nigeria",
    deadline: "July 15, 2024",
    location: "Lagos, Nigeria",
    link: "#",
    category: "Call for Papers"
  },
  {
    id: 3,
    title: "Digital Humanities Fellowship",
    type: "Fellowship",
    provider: "Pan-African Digital Archive",
    deadline: "October 10, 2024",
    location: "Accra, Ghana",
    link: "#",
    category: "Internship"
  },
  {
    id: 4,
    title: "Oral History Research Grant",
    type: "Grant",
    provider: "Young Historians Initiative",
    deadline: "Open Always",
    location: "Nationwide",
    link: "#",
    category: "Grant"
  }
];

export function Opportunities() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = opportunities.filter(op => 
    op.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    op.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    op.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="opportunities" className="py-24 bg-gradient-to-br from-stone-50 via-zinc-50 to-amber-50/20 dark:bg-zinc-950 dark:from-zinc-950 dark:via-zinc-950 dark:to-zinc-950 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-academic-grid opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="space-y-4">
              <h2 className="text-primary dark:text-brand-gold font-bold tracking-widest uppercase text-xs">Academic Opportunities</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Unlock your <span className="text-primary dark:text-brand-gold">Potential</span>
              </h3>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                We curat scholarships, conferences, and grants specifically for undergraduate history students and recent graduates.
              </p>
            </div>
            
            <div className="w-full md:w-96 relative">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
               <Input 
                className="pl-12 h-14 bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-2xl shadow-sm focus:ring-primary focus-visible:ring-primary"
                placeholder="Search scholarships, grants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
               />
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((op, i) => (
            <FadeIn key={op.id} delay={i * 0.1}>
              <div className="bg-white dark:bg-zinc-900 p-8 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 hover:shadow-xl transition-all group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-brand-gold/5 rounded-bl-full -z-0 translate-x-8 -translate-y-8 group-hover:bg-primary/10 dark:group-hover:bg-brand-gold/10 transition-colors"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-3 py-1 bg-primary/10 dark:bg-brand-gold/15 text-primary dark:text-brand-gold text-[10px] font-black uppercase tracking-widest rounded-full">
                      {op.type}
                    </span>
                    <button className="text-zinc-300 dark:text-zinc-600 hover:text-brand-gold transition-colors">
                      <Bookmark size={20} />
                    </button>
                  </div>
                  
                  <h4 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-brand-gold transition-colors">{op.title}</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 font-medium mb-8">{op.provider}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-sm">
                      <Calendar size={16} />
                      <span>{op.deadline}</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400 dark:text-zinc-500 text-sm">
                      <MapPin size={16} />
                      <span>{op.location}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-zinc-50 dark:border-zinc-800/50">
                    <div className="flex items-center gap-2">
                       <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-500">
                          <Globe size={14} />
                       </div>
                       <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-tighter">{op.category}</span>
                    </div>
                    <Button variant="ghost" className="text-primary dark:text-brand-gold font-bold hover:bg-primary/5 dark:hover:bg-brand-gold/10 gap-2 group/btn">
                      View Details <ExternalLink size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
          
          {filtered.length === 0 && (
            <div className="col-span-full py-20 text-center space-y-4 bg-zinc-100/50 dark:bg-zinc-900/30 rounded-3xl border border-dashed dark:border-zinc-800">
               <div className="w-16 h-16 bg-zinc-200 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto text-zinc-400 dark:text-zinc-500">
                  <Search size={32} />
               </div>
               <p className="text-zinc-500 dark:text-zinc-400 font-medium">No opportunities found matching your search.</p>
               <Button variant="outline" onClick={() => setSearchTerm("")}>Clear Search</Button>
            </div>
          )}
        </div>
        
        <FadeIn delay={0.5}>
          <div className="mt-16 bg-brand-navy p-10 rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 text-center md:text-left">
                 <h4 className="text-2xl font-bold text-white">Never miss an opportunity</h4>
                 <p className="text-zinc-300">Join our newsletter to get weekly curated opportunities delivered to your inbox.</p>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                 <Input className="bg-white/10 border-white/10 text-white placeholder:text-zinc-400 h-14 md:w-64" placeholder="Email address" />
                 <Button className="h-14 px-8 bg-brand-gold text-brand-navy font-bold hover:bg-white">Subscribe</Button>
              </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
