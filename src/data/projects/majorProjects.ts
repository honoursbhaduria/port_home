import { ProjectType } from "@/types";

export const majorProjects: ProjectType[] = [
  {
    image: "/projects/major/parkezy.png",
    title: "Parkezy – Smart Parking Marketplace",
    description:
      "Two-sided parking marketplace: drivers find nearby spots on a map, book in two taps with Razorpay and unlock gates via a rotating QR code or offline 6-digit PIN; hosts list spaces, scan drivers in and withdraw earnings. Android app plus an 89-route FastAPI backend on PostGIS with a Celery outbox worker.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: [
      "React Native",
      "Expo",
      "FastAPI",
      "PostgreSQL",
      "PostGIS",
      "Redis",
      "Celery",
      "Razorpay",
    ],
    liveLink: "https://parkezy-landing.vercel.app/",
    repoLink: "https://github.com/honoursbhaduria/Parkezy-2.0",
  },
  {
    image: "/projects/major/arize.png",
    title: "Arize – AI Fitness & Health Platform",
    description:
      "Production-grade open-source AI fitness platform with multi-agent orchestration using LangGraph; agents handle fitness guidance, medical report OCR analysis, and e-commerce recommendations autonomously.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["LangChain", "LangGraph", "Gemini API", "Python"],
    liveLink: "https://arize-theta.vercel.app/",
  },
  {
    image: "/projects/major/cognivault-dev.png",
    title: "CogniVault – Enterprise Agentic RAG Platform",
    description:
      "Enterprise Agentic RAG platform implementing dynamic LangGraph reasoning, zero-trust NeMo guardrails, and two-stage retrieval with Qdrant HNSW vector search and FlashRank reranking.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: [
      "LangGraph",
      "LangChain",
      "Qdrant",
      "Python",
      "React",
      "TypeScript",
    ],
    liveLink: "https://cognivault-dev.vercel.app/",
  },
  {
    image: "/projects/major/anime-kai.png",
    title: "Anime Kai",
    description:
      "A production-ready anime-themed web application to search for your favorite anime and manage your personal watchlist and to-do list. Features real-time search powered by Jikan API and persistence with Neon PostgreSQL.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["React", "Vite", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://anime-kai-rho.vercel.app/",
  },
  {
    image: "/projects/major/log-scanner.png",
    title: "LogScanner – Cybersecurity Log Intelligence",
    description:
      "Real-time log analysis engine using Pathway's streaming dataflow to parse server logs and classify vulnerabilities (SQLi, auth failures) into threat reports.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["Django", "Pathway", "Python", "REST"],
    liveLink: "https://logscanner-ver.vercel.app/login",
  },
];
