"use client";

import Link from "next/link";
import { Menu, Sun, Moon, Search, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JoinCommunityButton } from "@/components/JoinCommunityButton";
import { useTheme } from "next-themes";
import { SearchModal } from "@/components/SearchModal";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState, useEffect } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#programs", label: "What We Do" },
    { href: "#team", label: "Team" },
    { href: "#competition", label: "Competition" },
    { href: "#opportunities", label: "Opportunities" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-brand-gold group-hover:rotate-6 transition-transform">
             <GraduationCap size={24} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-tighter text-primary dark:text-white">YOUNG HISTORIANS</span>
            <span className="text-[10px] font-bold text-brand-gold tracking-[0.2em] uppercase">Initiative</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-8 text-sm font-bold text-zinc-600 dark:text-zinc-400">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-primary dark:hover:text-brand-gold transition-colors relative group">
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <SearchModal 
            trigger={
              <Button variant="ghost" size="icon" className="rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800">
                <Search size={20} />
              </Button>
            } 
          />
          
          {mounted && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
          )}

          <div className="w-px h-6 bg-zinc-200 dark:bg-zinc-800 hidden md:block mx-2"></div>
          
          <JoinCommunityButton className="hidden md:inline-flex rounded-full px-6 font-bold bg-brand-navy text-white hover:bg-primary/90 dark:bg-brand-gold dark:text-brand-navy dark:hover:bg-white transition-all">
            Join Now
          </JoinCommunityButton>
          
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger 
              render={
                <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
                  <Menu size={24} />
                </Button>
              } 
            />
            <SheetContent side="right" className="w-[300px] sm:w-[400px] dark:bg-zinc-950 dark:border-zinc-800">
              <SheetHeader className="text-left border-b dark:border-zinc-800 pb-6 mb-6">
                <SheetTitle className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center text-brand-gold">
                      <GraduationCap size={20} />
                   </div>
                   <span className="text-xl font-black text-primary dark:text-white">Young Historians</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-lg font-bold text-zinc-600 dark:text-zinc-400 hover:text-brand-gold transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="pt-6 border-t dark:border-zinc-800">
                  <JoinCommunityButton
                    className="w-full h-14 rounded-2xl font-bold bg-brand-navy text-white dark:bg-brand-gold dark:text-brand-navy justify-center"
                  >
                    Join Community
                  </JoinCommunityButton>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
