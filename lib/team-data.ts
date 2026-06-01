export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Romanus Ngozi Gift",
    role: "Founder & Executive Director",
    bio: "First-Class graduate of History and International Studies from the University of Nigeria, Nsukka. Leads the initiative to support young historians across Nigeria and beyond.",
    image: "/team/romanus-ngozi-gift.jpeg",
  },
  {
    name: "Core Team Member",
    role: "Programs & Events",
    bio: "Coordinates workshops, webinars, and member programs that help historians build practical academic skills.",
    image: "/team/team-member-2.jpeg",
  },
  {
    name: "Core Team Member",
    role: "Community Building",
    bio: "Supports the Dear Young Historians community—connecting members, sharing opportunities, and fostering peer learning.",
    image: "/team/team-member-3.jpeg",
  },
  {
    name: "Core Team Member",
    role: "Research & Competitions",
    bio: "Helps members prepare for research presentations, abstract writing, and the national history competition.",
    image: "/team/team-member-4.jpeg",
  },
  {
    name: "Core Team Member",
    role: "Partnerships & Outreach",
    bio: "Builds relationships with universities and partners to expand opportunities for young historians.",
    image: "/team/team-member-5.jpeg",
  },
];
