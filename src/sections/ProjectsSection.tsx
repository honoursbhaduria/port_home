"use client";
import ProjectCard from "@/components/ProjectCard";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { ProjectType } from "@/types";
import { FolderGit2 } from "lucide-react";
import React from "react";

const projects: ProjectType[] = [
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
    image: "/projects/arize.png",
    title: "Arize – AI Fitness & Health Platform",
    description:
      "Production-grade open-source AI fitness platform with multi-agent orchestration using LangGraph; agents handle fitness guidance, medical report OCR analysis, and e-commerce recommendations autonomously.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["LangChain", "LangGraph", "Gemini API", "Python"],
    liveLink: "https://arize-theta.vercel.app/",
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
    image: "/projects/movie-dog.png",
    title: "MovieDog – Conversational Discovery",
    description:
      "RAG-based recommendation agent backed by pgvector semantic search on Supabase; Google OAuth persists user watch history and preferences.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["React", "Supabase", "RAG", "pgvector"],
    liveLink: "https://moviedog.vercel.app/",
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
    image: "/projects/log-scanner.png",
    title: "LogScanner – Cybersecurity Log Intelligence",
    description:
      "Real-time log analysis engine using Pathway's streaming dataflow to parse server logs and classify vulnerabilities (SQLi, auth failures) into threat reports.",
    status: "Completed",
    isUpdatingConstantly: true,
    technologies: ["Django", "Pathway", "Python", "REST"],
    liveLink: "https://logscanner-ver.vercel.app/login",
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

export default function ProjectsSection() {
  const [showAll, setShowAll] = React.useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);
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
                  {projects.length} Projects Live
                </span>
              </div>
            </div>
          </SectionHeading>

          <div className="grid grid-cols-1 gap-6">
            {visibleProjects.map((project, idx) => (
              <ProjectCard key={project.title} project={project} idx={idx} />
            ))}

            <div>
              <button
                onClick={() => setShowAll(!showAll)}
                className="mt-2 text-sm text-zinc-400 hover:text-zinc-200 cursor-pointer transition px-3 py-2 border border-zinc-900 hover:border-zinc-800 rounded-md flex items-center gap-2"
              >
                {showAll ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}
