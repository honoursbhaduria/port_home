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
   {
    image: "/projects/study.png",
    title: "Study Bud",
    description:
      "Study Bud is a chat application where users can chat in specific categories. Both admins and users have their respective roles and permissions.",
    status: "In Progress",
    technologies: ["DRF", "Django", "MongoDB", "Tailwind"],
    liveLink: "https://github.com/honoursbhaduria/study-bud.git",
  },
   {
    image: "/projects/ai_r.png",
    title: "AI Resume Critiquer (Streamlit)",
    description:
      "AI Resume Critiquer is a Streamlit application that analyzes resumes and provides feedback to users.",
    status: "Completed",
    technologies: ["Streamlit", "Python", "Django"],
    liveLink: "https://github.com/honoursbhaduria/AI_python-project.git",
  },
   {
    image: "/projects/imposter.png",
    title: "Imposter studios",
    description:
      "simple html css js project",
    status: "Completed",
    technologies: ["html", "css", "js"],
    liveLink: "https://imposter-studio-7twirnp4n-honoursbhadaurias-projects.vercel.app/",
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
