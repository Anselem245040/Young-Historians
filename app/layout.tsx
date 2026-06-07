import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: "Young Historians Initiative | Empowering the Next Generation",
  description:
    "Supporting undergraduate historians and recent graduates through research development, mentorship, and academic opportunities.",
  openGraph: {
    title: "Young Historians Initiative",
    description:
      "Dear Young Historians — mentorship, workshops, and opportunities for the next generation of historians.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className='antialiased font-sans'>
        <a
          href='#main-content'
          className='sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-brand-gold focus:text-brand-navy focus:rounded-lg focus:font-bold'
        >
          Skip to main content
        </a>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
