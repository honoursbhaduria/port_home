import { ProjectType } from "@/types";

export const usersProjects: ProjectType[] = [
  {
    image: "/projects/users/cybervidya.pages.dev.png",
    title: "CyberVidya – KIET Attendance & Academic Portal",
    description:
      "High-performance student attendance and academic tracking portal for KIET students with 2,000+ daily active users. Features real-time subject-wise attendance analytics, on-demand lecture checkups, dynamic attendance projections, holiday planning calculators, and a local-first zero-credential-leak architecture.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Cloudflare Pages",
    ],
    liveLink: "https://cybervidya.pages.dev/",
    repoLink: "https://github.com/honoursbhaduria/attendance-kiet",
    userStats: "2,000+ Daily Active Users",
    category: "Campus Production Portal",
  },
  {
    image: "/projects/users/movie-dog.png",
    title: "MovieDog – Conversational Discovery",
    description:
      "RAG-based recommendation agent backed by pgvector semantic search on Supabase; Google OAuth persists user watch history and preferences.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["React", "Supabase", "RAG", "pgvector"],
    liveLink: "https://moviedog.vercel.app/",
    userStats: "Live Active Users & OAuth",
    category: "Conversational Discovery",
  },
];
