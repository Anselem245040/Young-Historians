import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeIn } from "@/components/FadeIn";
import { notFound } from "next/navigation";
import { Calendar, User, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POST_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  author: string;
  publishedAt: string;
  mainImage: any;
  category: string;
  excerpt: string;
  body: any;
}

interface BlogDetailPageProps {
  params: Promise<{ blogId: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<{ slug: string }[]>(POSTS_QUERY)
    return posts.map((post) => ({ blogId: post.slug }))
  } catch {
    return []
  }
}

export default async function BlogDetailPage({
  params,
}: BlogDetailPageProps) {
  const { blogId } = await params;
  const post: BlogPost | null = await client.fetch(
    POST_QUERY,
    { slug: blogId },
    { next: { revalidate: 60 } }
  )

  if (!post) {
    notFound();
  }

  return (
    <div className='min-h-screen bg-white flex flex-col font-sans'>
      <Navbar />

      <main className='flex-1 pt-20'>
        {/* Blog Hero */}
        <div className='bg-zinc-900 py-24 relative overflow-hidden'>
          <div className='absolute inset-0 opacity-20 bg-brand-navy'></div>
          <div className='max-w-4xl mx-auto px-6 relative z-10 text-center space-y-6'>
            <FadeIn>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-brand-gold hover:text-white transition-colors text-sm font-medium mb-4'
              >
                <ArrowLeft size={16} /> Back to Blog
              </Link>
              <div className='inline-block bg-brand-gold/10 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider mb-4 border border-brand-gold/20'>
                {post.category}
              </div>
              <h1 className='text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight'>
                {post.title}
              </h1>
              <div className='flex items-center justify-center gap-6 text-zinc-400 text-sm pt-4'>
                <div className='flex items-center gap-2'>
                  <Calendar size={16} className='text-brand-gold' />
                  {post.publishedAt
                    ? new Date(post.publishedAt).toLocaleDateString()
                    : 'Draft'}
                </div>
                <div className='flex items-center gap-2'>
                  <User size={16} className='text-brand-gold' />
                  {post.author}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Featured Image */}
        {post.mainImage && (
          <div className='w-full h-96 relative'>
            <img
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              className='w-full h-full object-cover'
            />
          </div>
        )}

        {/* Content */}
        <section className='py-24'>
          <div className='max-w-3xl mx-auto px-6'>
            <FadeIn>
              <div className='prose prose-lg max-w-none text-zinc-700'>
                {post.body && (
                  <PortableText
                    value={post.body}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className='mb-6 leading-relaxed'>{children}</p>
                        ),
                        h2: ({ children }) => (
                          <h2 className='text-3xl font-bold text-zinc-900 mt-12 mb-6'>
                            {children}
                          </h2>
                        ),
                        h3: ({ children }) => (
                          <h3 className='text-2xl font-bold text-zinc-900 mt-8 mb-4'>
                            {children}
                          </h3>
                        ),
                        blockquote: ({ children }) => (
                          <blockquote className='border-l-4 border-brand-gold pl-6 py-4 my-6 text-lg italic text-zinc-600 bg-zinc-50 px-6 rounded'>
                            {children}
                          </blockquote>
                        ),
                      },
                      list: {
                        bullet: ({ children }) => (
                          <ul className='list-disc list-inside mb-6 space-y-2'>
                            {children}
                          </ul>
                        ),
                        number: ({ children }) => (
                          <ol className='list-decimal list-inside mb-6 space-y-2'>
                            {children}
                          </ol>
                        ),
                      },
                    }}
                  />
                )}
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
          