"use client";
import React from "react";
import LiveUserProjectCard from "@/components/projects/LiveUserProjectCard";
import { usersProjects } from "@/data/projects";
import { Users } from "lucide-react";

export default function UsersProjectsSection() {
  return (
    <div id="users-projects" className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-emerald-500/20">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
            <Users size={20} />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-zinc-100 flex items-center gap-2">
              <span>Projects with Users</span>
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-emerald-500"></span>
              </span>
            </h4>
            <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
              Production platforms deployed and actively used daily by real-world users with high uptime.
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 flex items-center gap-1.5">
          <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Live in Production</span>
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {usersProjects.map((project, idx) => (
          <LiveUserProjectCard
            key={project.title}
            project={project}
            idx={idx}
          />
        ))}
      </div>
    </div>
  );
}
