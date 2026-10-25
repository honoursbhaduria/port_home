"use client";
import React from "react";
import MinorProjectCard from "@/components/projects/MinorProjectCard";
import { minorProjects } from "@/data/projects";
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react";

export default function MinorProjectsSection({
  isSingleTab = false,
}: {
  isSingleTab?: boolean;
}) {
  const [showAll, setShowAll] = React.useState<boolean>(false);
  const displayLimit = 6;
  const visibleProjects =
    isSingleTab || showAll
      ? minorProjects
      : minorProjects.slice(0, displayLimit);

  return (
    <div id="minor-projects" className="space-y-5">
      <div className="flex items-center justify-between flex-wrap gap-2 pb-3 border-b border-zinc-900/80">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="text-xl md:text-2xl font-bold text-zinc-100 flex items-center gap-2">
              <span>Minor Projects</span>
            </h4>
            <p className="text-xs md:text-sm text-zinc-400 mt-0.5">
              Specialized tools, developer platforms, hackathons, and targeted domain solutions.
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
          {minorProjects.length} Projects
        </span>
      </div>

      {/* Modern 2-column grid layout for Minor Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {visibleProjects.map((project, idx) => (
          <MinorProjectCard key={project.title} project={project} idx={idx} />
        ))}
      </div>

      {!isSingleTab && minorProjects.length > displayLimit && (
        <div className="flex justify-center pt-2">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-xs md:text-sm text-zinc-300 hover:text-white cursor-pointer transition px-5 py-2.5 border border-zinc-800 hover:border-zinc-700 bg-zinc-950/60 hover:bg-zinc-900/80 rounded-xl flex items-center gap-2 shadow-sm"
          >
            <span>
              {showAll
                ? "Show Fewer Minor Projects"
                : `View All ${minorProjects.length} Minor Projects (${minorProjects.length - displayLimit} more)`}
            </span>
            {showAll ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
          </button>
        </div>
      )}
    </div>
  );
}
