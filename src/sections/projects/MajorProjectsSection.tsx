"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { majorProjects } from "@/data/projects";
import { Rocket } from "lucide-react";

export default function MajorProjectsSection() {
  return (
    <div id="major-projects" className="space-y-4">
      <div className="flex items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-900/80">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400">
            <Rocket size={18} />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-zinc-100 flex items-center gap-2">
              <span>Major Projects</span>
            </h4>
            <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
              Flagship full-stack & AI platforms engineered with distributed architecture, multi-agent systems, and production reliability.
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20">
          {majorProjects.length} Projects
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {majorProjects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </div>
  );
}
