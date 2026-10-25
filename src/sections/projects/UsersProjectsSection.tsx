"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { usersProjects } from "@/data/projects";
import { Users } from "lucide-react";

export default function UsersProjectsSection() {
  return (
    <div id="users-projects" className="space-y-4">
      <div className="flex items-start sm:items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-900/80">
        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
          <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5 sm:mt-0">
            <Users size={18} />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-100 flex items-center gap-2">
              <span>Projects with Users</span>
            </h4>
            <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
              Production applications serving real-world users with high uptime and reliable daily usage.
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0 self-start sm:self-auto">
          Live in Production
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {usersProjects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </div>
  );
}
