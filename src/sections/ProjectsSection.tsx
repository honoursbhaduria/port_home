import Link from "next/link";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { FolderGit2 } from "lucide-react";
import MajorProjectsSection from "@/sections/projects/MajorProjectsSection";
import { majorProjects, usersProjects, projectCounts } from "@/data/projects";

export default function ProjectsSection() {
  const movieDog = usersProjects.find((project) => project.liveLink === "https://moviedog.vercel.app/");
  const featuredProjects = majorProjects.map((project) =>
    project.liveLink === "https://anime-kai-rho.vercel.app/" && movieDog ? movieDog : project
  );
  return (
    <>
      <section className="w-full scroll-m-27.5" id="projects">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <FolderGit2 size={18} className="text-pink-400" />
            <p>Projects</p>
          </SectionHeadingPill>
          <SectionHeading subText="A selection of my major full-stack and AI projects. Explore the full collection for more applications, experiments, and developer tools.">
            <span className="flex flex-wrap items-center gap-3">
              <span>My Creations</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-zinc-400">{projectCounts.major} Major Projects</span>
            </span>
          </SectionHeading>
          <MajorProjectsSection projects={featuredProjects} />
          <div className="flex justify-center pt-2">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-500 hover:bg-zinc-800 hover:text-white">
              View all {projectCounts.total} projects
            </Link>
          </div>
        </div>
      </section>
      <SectionDivider />
    </>
  );
}
