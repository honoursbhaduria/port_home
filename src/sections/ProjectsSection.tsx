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
    image: "/projects/coursa.png",
    title: "Django Zero to Pro Course",
    description:
      "Django Zero to Pro is a comprehensive course designed to guide you from beginner to advanced levels, with practical projects that solidify your learning and real-world application.",
    status: "In Progress",
    technologies: ["DRF", "Django", "MongoDB", "Tailwind"],
    liveLink: "https://github.com/honoursbhaduria/Django-From-Zero-to-Pro.git",
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
            My Creations
          </SectionHeading>

          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-1 gap-3">
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
