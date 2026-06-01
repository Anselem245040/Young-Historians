"use client";

import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogDescription
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, BookOpen, GraduationCap, Trophy } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const quickResults = [
  { title: "African Historiography Guide", type: "Resource", icon: <BookOpen className="w-4 h-4" />, link: "#" },
  { title: "Oxford History Scholarship", type: "Opportunity", icon: <GraduationCap className="w-4 h-4" />, link: "#" },
  { title: "2024 Competition Guidelines", type: "Event", icon: <Trophy className="w-4 h-4" />, link: "#" },
];

export function SearchModal({ trigger }: { trigger: React.ReactElement }) {
  const [query, setQuery] = useState("");

  return (
    <Dialog>
      <DialogTrigger render={trigger} />
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden dark:bg-zinc-950 dark:border-zinc-800">
        <div className="p-6 border-b dark:border-zinc-800">
          <div className="relative">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5" />
            <Input 
              className="pl-8 border-none shadow-none text-xl focus-visible:ring-0 placeholder:text-zinc-400 bg-transparent dark:text-white"
              placeholder="Search resources, scholarships, events..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-4">
             <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Quick Results</h4>
             <div className="space-y-2">
                {quickResults.map((res, i) => (
                  <Link 
                    key={i} 
                    href={res.link}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 dark:bg-zinc-800 flex items-center justify-center text-primary dark:text-brand-gold">
                        {res.icon}
                      </div>
                      <div>
                        <p className="font-bold text-zinc-900 dark:text-white text-sm">{res.title}</p>
                        <p className="text-xs text-zinc-400">{res.type}</p>
                      </div>
                    </div>
                    <ArrowRight size={16} className="text-zinc-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
             </div>
          </div>
          
          <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-dashed dark:border-zinc-800 text-center">
             <p className="text-xs text-zinc-500">Press <kbd className="px-1 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600">Enter</kbd> to see all results</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
