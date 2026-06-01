import Link from "next/link";
import { SOCIAL_LINKS } from "@/lib/site-config";

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden
    >
      <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden
    >
      <path d='M7.0301 0h9.9398c3.8598 0 7.0301 3.1702 7.0301 7.0301v9.9398c0 3.8599-3.1702 7.0301-7.0301 7.0301h-9.9398c-3.8599 0-7.0301-3.1702-7.0301-7.0301v-9.9398c0-3.8599 3.1702-7.0301 7.0301-7.0301m.5 1.5h-9.4798c-2.7939 0-5.0301 2.236-5.0301 5v9.9398c0 2.7939 2.236 5.0301 5.0301 5.0301h9.4798c2.7939 0 5.0301-2.236 5.0301-5.0301v-9.9398c0-2.7939-2.236-5.0301-5.0301-5.0301m11.4698-.5c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2m-5.4698 3.5c2.7614 0 5 2.2386 5 5s-2.2386 5-5 5-5-2.2386-5-5 2.2386-5 5-5m0 1.5c-1.933 0-3.5 1.567-3.5 3.5s1.567 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.567-3.5-3.5-3.5z' />
    </svg>
  );
}

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden
    >
      <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.25-.129.599-.129.949v5.438h-3.554s.047-8.842 0-9.769h3.554v1.391c.432-.668 1.202-1.618 2.926-1.618 2.138 0 3.747 1.398 3.747 4.401v5.595zM5.337 9.433c-1.144 0-1.915-.759-1.915-1.71 0-.955.77-1.71 1.957-1.71 1.188 0 1.916.759 1.938 1.71 0 .951-.75 1.71-1.98 1.71zm1.946 11.019H3.391V9.683h3.892v10.769zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.729C24 .774 23.202 0 22.224 0z' />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden
    >
      <path d='M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.77 1.52V6.76a4.85 4.85 0 0 1-1-.07z' />
    </svg>
  );
}

type SocialLinksProps = {
  className?: string;
  iconClassName?: string;
  size?: "sm" | "md";
};

const sizeMap = { sm: 16, md: 20 };

export function SocialLinks({
  className = "",
  iconClassName = "",
  size = "md",
}: SocialLinksProps) {
  const iconSize = sizeMap[size];
  const base =
    "inline-flex items-center justify-center rounded-full transition-colors " +
    iconClassName;

  const items = [
    {
      href: SOCIAL_LINKS.linkedin,
      label: "LinkedIn",
      icon: <LinkedinIcon size={iconSize} />,
    },
    {
      href: SOCIAL_LINKS.facebook,
      label: "Facebook",
      icon: <FacebookIcon size={iconSize} />,
    },
    {
      href: SOCIAL_LINKS.instagram,
      label: "Instagram",
      icon: <InstagramIcon size={iconSize} />,
    },
    {
      href: SOCIAL_LINKS.tiktok,
      label: "TikTok",
      icon: <TikTokIcon size={iconSize} />,
    },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ href, label, icon }) => (
        <Link
          key={label}
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          aria-label={`Follow us on ${label}`}
          className={base}
        >
          {icon}
        </Link>
      ))}
    </div>
  );
}
