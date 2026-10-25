"use client";
import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { minorProjects } from "@/data/projects";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function MinorProjectsSection({
  isSingleTab = false,
}: {
  isSingleTab?: boolean;
}) {
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const displayLimit = 4;
  const visibleProjects =
    isSingleTab || showAll
      ? minorProjects
      : minorProjects.slice(0, displayLimit);

  return (
    <div id="minor-projects" className="space-y-4">
      <div className="flex items-start sm:items-center justify-between flex-wrap gap-2 pb-2 border-b border-zinc-900/80">
        <div className="flex items-start sm:items-center gap-2.5 sm:gap-3">
          <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5 sm:mt-0">
            <Sparkles size={18} />
          </div>
          <div>
            <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-zinc-100 flex items-center gap-2">
              <span>Minor Projects</span>
            </h4>
            <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
              Targeted tools, hackathon solutions, utilities, and focused experimental platforms.
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0 self-start sm:self-auto">
          {minorProjects.length} Projects
        </span>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {visibleProjects.map((project, idx) => (
          <ProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>

      {!isSingleTab && minorProjects.length > displayLimit && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full sm:w-auto text-xs md:text-sm text-zinc-400 hover:text-zinc-100 cursor-pointer transition px-4 py-2.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/40 rounded-xl flex items-center justify-center gap-2"
          >
            <span>
              {showAll
                ? "Show Fewer Minor Projects"
                : `Show All ${minorProjects.length} Minor Projects (${minorProjects.length - displayLimit} more)`}
            </span>
            {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
      )}
    </div>
  );
}
