"use client";
import ProjectCard from "@/components/ProjectCard";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { ProjectType } from "@/types";
import { FolderGit2, Layers, Rocket, Sparkles, Users } from "lucide-react";
import React from "react";

// Section 1: Major Projects
const majorProjects: ProjectType[] = [
  {
    image: "/projects/parkezy.png",
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
    image: "/projects/arize...png",
    title: "Arize – AI Fitness & Health Platform",
    description:
      "Production-grade open-source AI fitness platform with multi-agent orchestration using LangGraph; agents handle fitness guidance, medical report OCR analysis, and e-commerce recommendations autonomously.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["LangChain", "LangGraph", "Gemini API", "Python"],
    liveLink: "https://arize-theta.vercel.app/",
  },
  {
    image: "/projects/cognivault-dev.png",
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
    image: "/projects/anime-kai.png",
    title: "Anime Kai",
    description:
      "A production-ready anime-themed web application to search for your favorite anime and manage your personal watchlist and to-do list. Features real-time search powered by Jikan API and persistence with Neon PostgreSQL.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["React", "Vite", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    liveLink: "https://anime-kai-rho.vercel.app/",
  },
  {
    image: "/projects/log-scanner.png",
    title: "LogScanner – Cybersecurity Log Intelligence",
    description:
      "Real-time log analysis engine using Pathway's streaming dataflow to parse server logs and classify vulnerabilities (SQLi, auth failures) into threat reports.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["Django", "Pathway", "Python", "REST"],
    liveLink: "https://logscanner-ver.vercel.app/login",
  },
];

// Section 2: Minor Projects
const minorProjects: ProjectType[] = [
  {
    image: "/projects/kestrel.png",
    title: "Kestrel – AI Design-Review Agent for Architects",
    description:
      "Interactive design-review and automated code-compliance platform for architects. Sits inside architectural CAD/BIM workflows to flag standards violations in real time, scan 2D floor plans with live coordinate tracking, compute deterministic buildable envelopes via Shapely & PostGIS, and propose non-destructive geometry fixes.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: [
      "TanStack Start",
      "React 19",
      "Vite",
      "GSAP",
      "FastAPI",
      "Shapely",
      "PostGIS",
      "TypeScript",
    ],
    liveLink: "https://kestrel-arch.vercel.app/",
    repoLink: "https://github.com/honoursbhaduria/KESTREL",
  },
  {
    image: "/projects/checkout-emp.png",
    title: "Checkout – AI Interview Simulator",
    description:
      "Takes a candidate from resume + job description to interview-ready: role intelligence, explainable 7-dimension Job Fit scoring, an adaptive AI voice interview (Screening → Competency → Deep-Dive) with live faster-whisper transcription and Gemini TTS, and a calibrated readiness report with a prep plan.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: [
      "React",
      "FastAPI",
      "Gemini",
      "faster-whisper",
      "Qdrant",
      "PostgreSQL",
      "Redis",
    ],
    liveLink: "https://checkout-emp.vercel.app/",
    repoLink: "https://github.com/honoursbhaduria/checkout",
  },
  {
    image: "/projects/exspo-scholar-ship.png",
    title: "Scholarship Intelligence Platform",
    description:
      "Continuous discovery, evidence verification, and version diff tracking for official Indian education schemes. Tracks 26 crawled items with 96.3% avg confidence, field-by-field diffing, SHA-256 snapshot storage and full repository audit chain.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: [
      "Next.js",
      "TypeScript",
      "Python",
      "Web Crawling",
      "Tailwind CSS",
    ],
    liveLink: "https://exspo-scholarship-cwarler.vercel.app/",
  },
  {
    image: "/projects/exspo-mailing-agent.png",
    title: "GoScraping – Influencer Scraping Dashboard",
    description:
      "Dashboard developed for scraping data from multiple known platforms. Scrapy + Playwright pipeline discovered 520 profiles (313 qualified), with niche, geography and influencer-scale filters, classification engine, AI personalization and outreach audit log.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["React", "Next.js", "Scrapy", "Playwright", "Python"],
    liveLink: "https://exspo-mailing-agent-v1.vercel.app/",
  },
  {
    image: "/projects/instant-mechanic.png",
    title: "Instant Mechanic – AI Car Care Platform",
    description:
      "One platform for every car need — instant roadside help in 20 minutes, AI-powered diagnosis, transparent repair bills, and complete car care membership. Delhi NCR's trusted car care with AI Check, live service history and coverage.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "AI Diagnosis",
    ],
    liveLink: "https://instant-mechanic-task.vercel.app/",
  },
  {
    image: "/projects/saathi-v2.png",
    title: "Saathi V2",
    description:
      "Saathi V2 is my latest project, a comprehensive platform designed to provide support and resources for students. It features a modern UI and robust backend for a seamless user experience.",
    status: "In Progress",
    isUpdatingConstantly: true,
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    liveLink: "https://saathi-v2.vercel.app/",
  },
  {
    image: "/projects/esecure.png",
    title: "ESECURE – AI T&C Analyzer",
    description:
      "Shipped a Chrome Extension + full-stack web app that ingests raw T&C text and returns a structured Gemini AI analysis including flagged risky clauses and a safety score.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["Flask", "React", "TypeScript", "Gemini API"],
    liveLink: "https://esecure-orcin.vercel.app/",
  },
  {
    image: "/projects/canvas-blog-4u.png",
    title: "Canvas4Blog – RAG Research Blogging",
    description:
      "Multi-source RAG pipeline that ingests a cluster of user-linked blogs, chunks and embeds content into a vector store, and auto-drafts context-aware research posts grounded in user knowledge.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["React", "Python", "LangChain", "RAG"],
    liveLink: "https://canvas4blog.vercel.app/",
  },
  {
    image: "/projects/plantcare-ai.png",
    title: "PlantCare AI – Rice Disease Detection",
    description:
      "Achieved 96.67% validation accuracy on a 3-class rice leaf disease classifier; benchmarked 6 architectures and selected Xception as optimal via systematic ablation.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["TensorFlow", "Keras", "Python", "Xception"],
    liveLink: "https://plantcare-ai-4ojf.onrender.com/",
  },
  {
    image: "/projects/djnagoo-zero-to-pro.png",
    title: "Django Zero to Pro Course",
    description:
      "Comprehensive course designed to guide you from beginner to advanced levels, with practical projects covering models, views, forms, auth, and deployment.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["Django", "Python"],
    liveLink: "https://django-from-zero-to-pro.vercel.app/",
  },
];

// Section 3: Projects with Users
const usersProjects: ProjectType[] = [
  {
    image: "/projects/cybervidya.pages.dev.png",
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
  },
  {
    image: "/projects/movie-dog.png",
    title: "MovieDog – Conversational Discovery",
    description:
      "RAG-based recommendation agent backed by pgvector semantic search on Supabase; Google OAuth persists user watch history and preferences.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["React", "Supabase", "RAG", "pgvector"],
    liveLink: "https://moviedog.vercel.app/",
  },
];

type TabType = "all" | "major" | "minor" | "users";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = React.useState<TabType>("all");
  const [showAllMinor, setShowAllMinor] = React.useState<boolean>(false);

  const totalProjectsCount =
    majorProjects.length + minorProjects.length + usersProjects.length;

  const tabs = [
    {
      id: "all" as const,
      label: "All Projects",
      count: totalProjectsCount,
      icon: Layers,
    },
    {
      id: "major" as const,
      label: "Major Projects",
      count: majorProjects.length,
      icon: Rocket,
    },
    {
      id: "minor" as const,
      label: "Minor Projects",
      count: minorProjects.length,
      icon: Sparkles,
    },
    {
      id: "users" as const,
      label: "Projects with Users",
      count: usersProjects.length,
      icon: Users,
    },
  ];

  return (
    <>
      <section className="w-full scroll-m-27.5" id="projects">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <FolderGit2 size={18} className="text-pink-400" />
            <p>Projects</p>
          </SectionHeadingPill>

          <SectionHeading subText="Projects that reflect my skills, problem-solving mindset, and passion for building impactful digital experiences.">
            <div className="flex items-center gap-3">
              <span>My Creations</span>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <div className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-pink-500"></span>
                </div>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                  {totalProjectsCount} Projects Live
                </span>
              </div>
            </div>
          </SectionHeading>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-white text-zinc-950 shadow-lg font-semibold"
                      : "bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80"
                  }`}
                >
                  <Icon
                    size={15}
                    className={isActive ? "text-zinc-950" : "text-zinc-400"}
                  />
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? "bg-zinc-200 text-zinc-900"
                        : "bg-zinc-800 text-zinc-400"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="space-y-12">
            {/* 1. Major Projects Section */}
            {(activeTab === "all" || activeTab === "major") && (
              <div id="major-projects" className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-900/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
                      <Rocket size={18} />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-zinc-100">
                        Major Projects
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
                        Flagship full-stack & AI platforms built with scalable architecture and advanced engineering.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    {majorProjects.length} Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {majorProjects.map((project, idx) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      idx={idx}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* 2. Minor Projects Section */}
            {(activeTab === "all" || activeTab === "minor") && (
              <div id="minor-projects" className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-900/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      <Sparkles size={18} />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-zinc-100">
                        Minor Projects
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
                        Targeted tools, hackathon solutions, utilities, and focused experimental platforms.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                    {minorProjects.length} Projects
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {(activeTab === "minor" || showAllMinor
                    ? minorProjects
                    : minorProjects.slice(0, 4)
                  ).map((project, idx) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      idx={idx}
                    />
                  ))}
                </div>

                {activeTab === "all" && minorProjects.length > 4 && (
                  <div className="flex justify-center pt-2">
                    <button
                      onClick={() => setShowAllMinor(!showAllMinor)}
                      className="text-xs md:text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer transition px-4 py-2 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 rounded-xl flex items-center gap-2"
                    >
                      <span>
                        {showAllMinor
                          ? "Show Fewer Minor Projects"
                          : `Show All ${minorProjects.length} Minor Projects (${minorProjects.length - 4} more)`}
                      </span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* 3. Projects with Users Section */}
            {(activeTab === "all" || activeTab === "users") && (
              <div id="users-projects" className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-900/80">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                      <Users size={18} />
                    </div>
                    <div>
                      <h4 className="text-xl md:text-2xl font-bold text-zinc-100">
                        Projects with Users
                      </h4>
                      <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
                        Production applications serving real-world users with high uptime and reliable daily usage.
                      </p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Live in Production
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {usersProjects.map((project, idx) => (
                    <ProjectCard
                      key={project.title}
                      project={project}
                      idx={idx}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}
