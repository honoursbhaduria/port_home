import type { Metadata } from "next";
import Link from "next/link";
import { FolderGit2 } from "lucide-react";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import ProjectGallery from "@/components/projects/ProjectGallery";
import { projectCounts } from "@/data/projects";

export const metadata: Metadata = {
  title: "All Projects | Honours Bhadauria",
  description: "Explore Honours Bhadauria's full collection of full-stack applications, AI platforms, and developer tools.",
};

export default function ProjectsPage() {
  return (
    <section id="projects" className="w-full scroll-m-27.5 pb-32 pt-30 md:pt-40">
      <div className="container space-y-8 md:space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionHeadingPill>
            <FolderGit2 size={18} className="text-pink-400" />
            <p>Project collection</p>
          </SectionHeadingPill>
          <Link href="/#projects" className="rounded-lg border border-zinc-800 px-3 py-2 text-sm text-zinc-400 transition hover:border-zinc-600 hover:text-white">Back to portfolio</Link>
        </div>
        <header className="space-y-3">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">All Projects</h1>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">{projectCounts.total} Projects</span>
          </div>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-400">The complete collection, from full-stack and AI platforms to focused developer tools and applications serving real users.</p>
        </header>
        <ProjectGallery />
      </div>
    </section>
  );
}
