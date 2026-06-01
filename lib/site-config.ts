export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/dear-young-historians/",
  facebook:
    "https://www.facebook.com/profile.php?id=100063859733170",
  instagram:
    "https://www.instagram.com/young_historians_initiative?igsh=MWliNWNsaWI1a256aA==",
  tiktok: "https://www.tiktok.com/@younghistoriansinitiativ",
} as const;

/** Primary CTA for joining the community */
export const COMMUNITY_JOIN_URL = SOCIAL_LINKS.instagram;

export const CONTACT_EMAIL = "partnerships@younghistorians.org";

export const HOME_SECTIONS = {
  about: "#about",
  programs: "#programs",
  team: "#team",
  workshops: "#workshops",
  competition: "#competition",
  opportunities: "#opportunities",
  impact: "#impact",
  community: "#community",
  blog: "#blog",
  partnership: "#partnership",
  support: "#support",
} as const;
