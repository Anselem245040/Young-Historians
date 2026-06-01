import Link from "next/link";
import { GraduationCap, Mail } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";
import { CONTACT_EMAIL, HOME_SECTIONS } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="bg-brand-navy text-zinc-400 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4 md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold">
              <GraduationCap size={24} />
            </div>
            <span className="text-2xl font-bold tracking-tight text-white">
              Young Historians
            </span>
          </Link>
          <p className="max-w-sm text-sm leading-relaxed text-zinc-300">
            Supporting the next generation of historians through mentorship,
            research support, and career development.
          </p>
          <SocialLinks
            iconClassName="w-10 h-10 text-zinc-400 hover:text-brand-gold hover:bg-white/10"
          />
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href={HOME_SECTIONS.about}
                className="text-zinc-400 hover:text-brand-gold transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={HOME_SECTIONS.programs}
                className="text-zinc-400 hover:text-brand-gold transition-colors"
              >
                Programs
              </Link>
            </li>
            <li>
              <Link
                href={HOME_SECTIONS.impact}
                className="text-zinc-400 hover:text-brand-gold transition-colors"
              >
                Impact
              </Link>
            </li>
            <li>
              <Link
                href={HOME_SECTIONS.community}
                className="text-zinc-400 hover:text-brand-gold transition-colors"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-4">Connect</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                href="https://www.linkedin.com/company/dear-young-historians/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-brand-gold transition-colors"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/profile.php?id=100063859733170"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-brand-gold transition-colors"
              >
                Facebook
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/young_historians_initiative?igsh=MWliNWNsaWI1a256aA=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-brand-gold transition-colors"
              >
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@younghistoriansinitiativ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-brand-gold transition-colors"
              >
                TikTok
              </Link>
            </li>
            <li>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-zinc-400 hover:text-brand-gold transition-colors inline-flex items-center gap-2"
              >
                <Mail size={14} />
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-zinc-400">
          © {new Date().getFullYear()} Young Historians. All rights reserved.
        </p>
        <p className="text-zinc-500 text-xs">
          Dear Young Historians Initiative
        </p>
      </div>
    </footer>
  );
}
