import { FadeIn } from "@/components/FadeIn";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { blogPosts } from "@/lib/blog-data";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

export function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-background dark:bg-zinc-950 transition-colors duration-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-academic-grid opacity-30 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-primary dark:text-brand-gold font-semibold tracking-wide uppercase text-sm">Latest Articles</h2>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white">
                Insights & Resources
              </h3>
            </div>
            <Link href="/blog" className="text-primary dark:text-brand-gold font-bold flex items-center gap-2 group">
              View all posts <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <Card className="group overflow-hidden border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl transition-all duration-500 bg-white dark:bg-zinc-900 flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-zinc-200 dark:bg-zinc-800 animate-pulse"></div>
                  {/* Placeholder for blog image */}
                  <div className="absolute inset-0 bg-brand-navy/10 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute top-4 left-4 bg-brand-gold text-brand-navy text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
                    {post.category}
                  </div>
                </div>
                <CardHeader className="flex-1">
                  <div className="flex items-center gap-4 text-xs text-zinc-400 dark:text-zinc-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={12} />
                      {post.author}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary dark:group-hover:text-brand-gold transition-colors line-clamp-2 dark:text-white">
                    <Link 
                      href={post.externalUrl || `/blog/${post.id}`}
                      target={post.externalUrl ? "_blank" : "_self"}
                    >
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400 line-clamp-3 pt-2">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0 pb-6 mt-auto">
                  <Link 
                    href={post.externalUrl || `/blog/${post.id}`}
                    target={post.externalUrl ? "_blank" : "_self"}
                    className="text-primary dark:text-brand-gold font-medium flex items-center gap-2 group/link text-sm"
                  >
                    {post.externalUrl ? "Read on External Platform" : "Read Article"} <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
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
