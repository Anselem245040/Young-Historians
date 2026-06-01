import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  mainImage: any;
  category: string;
}

export default async function BlogListPage() {
  let posts: BlogPost[] = []
  try {
    posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } })
  } catch (error) {
    console.error('Failed to fetch posts from Sanity:', error)
  }

  return (
    <div className='min-h-screen bg-zinc-50 flex flex-col font-sans'>
      <Navbar />

      <main className='flex-1 pt-24'>
        <section className='py-24 bg-white border-b border-zinc-100'>
          <div className='max-w-7xl mx-auto px-6 text-center space-y-6'>
            <FadeIn>
              <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-zinc-900'>
                Insights for <span className='text-primary'>Historians</span>
              </h1>
              <p className='text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed'>
                Stay updated with the latest news, research tips, and career
                opportunities for young historians.
              </p>
            </FadeIn>
          </div>
        </section>

        <section className='py-24'>
          <div className='max-w-7xl mx-auto px-6'>
            <div className='grid md:grid-cols-3 gap-12'>
              {posts.length === 0 && (
                <p className='col-span-full text-center text-zinc-500 py-12'>
                  No posts yet. Publish a post in Sanity Studio (with a slug) to
                  see it here.
                </p>
              )}
              {posts.map((post, index) => (
                <FadeIn key={post._id} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`}>
                    <Card className='group overflow-hidden border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white flex flex-col h-full cursor-pointer'>
                      <div className='relative h-64 overflow-hidden bg-zinc-200'>
                        {post.mainImage && (
                          <img
                            src={urlFor(post.mainImage).url()}
                            alt={post.title}
                            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700'
                          />
                        )}
                        <div className='absolute top-4 left-4 bg-brand-gold text-brand-navy text-xs font-bold px-2 py-1 rounded uppercase tracking-wider'>
                          {post.category}
                        </div>
                      </div>
                      <CardHeader className='flex-1 p-8'>
                        <div className='flex items-center gap-4 text-xs text-zinc-400 mb-4'>
                          <div className='flex items-center gap-1'>
                            <Calendar size={14} />
                            {post.publishedAt
                              ? new Date(post.publishedAt).toLocaleDateString()
                              : 'Draft'}
                          </div>
                          <div className='flex items-center gap-1'>
                            <User size={14} />
                            {post.author}
                          </div>
                        </div>
                        <CardTitle className='text-xl font-bold text-zinc-900 group-hover:text-brand-gold transition-colors mb-3'>
                          {post.title}
                        </CardTitle>
                        <CardDescription className='text-sm text-zinc-600 line-clamp-2'>
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='p-8 pt-0'>
                        <div className='flex items-center gap-2 text-brand-gold font-semibold text-sm group-hover:gap-4 transition-all'>
                          Read More <ArrowRight size={16} />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
