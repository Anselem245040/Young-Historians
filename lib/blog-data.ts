export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  externalUrl?: string; // Add this for Medium/LinkedIn links
}

export const blogPosts: BlogPost[] = [
  {
    id: "dear-young-historians-launch",
    title: "Launching 'Dear Young Historians': A Guide for the Next Generation",
    excerpt: "The official launch of our flagship book aimed at empowering undergraduate history students in Nigeria.",
    content: "Full content of the launch event and why this book matters for the discipline of history...",
    author: "Romanus Ngozi Gift",
    date: "May 10, 2024",
    image: "/blog/launch.jpg",
    category: "Announcements"
  },
  {
    id: "navigating-history-careers",
    title: "Beyond the Classroom: Career Pathways for History Graduates",
    excerpt: "Exploring diverse opportunities in research, archives, international relations, and digital storytelling.",
    content: "History is more than just teaching. In this post, we explore the vast landscape of opportunities...",
    author: "Romanus Ngozi Gift",
    date: "April 22, 2024",
    image: "/blog/careers.jpg",
    category: "Career Advice"
  },
  {
    id: "digital-visibility-historians",
    title: "The Digital Historian: Building Visibility in the 21st Century",
    excerpt: "How young historians can use digital tools and platforms to share their research and build a brand.",
    content: "In today's world, if your research isn't online, does it even exist? We discuss the importance of digital presence...",
    author: "Romanus Ngozi Gift",
    date: "March 15, 2024",
    image: "/blog/digital.jpg",
    category: "Skill Building"
  },
  {
    id: "medium-article-example",
    title: "How History Shapes the Future of African Tech",
    excerpt: "A deep dive into the intersection of historical perspective and modern innovation, originally published on Medium.",
    content: "", // Content not needed for external links
    author: "Romanus Ngozi Gift",
    date: "June 05, 2024",
    image: "/blog/tech.jpg",
    category: "Perspective",
    externalUrl: "https://medium.com/@example/history-shapes-future-tech"
  }
];
