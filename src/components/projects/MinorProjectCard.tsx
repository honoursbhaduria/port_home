"use client";
import { ProjectType } from "@/types";
import React from "react";
import SkillsBadge from "@/components/SkillsBadge";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";

export default function MinorProjectCard({
  project,
  idx,
}: {
  project: ProjectType;
  idx: number;
}) {
  const isCompleted: boolean = project.status === "Completed";
  const [imgError, setImgError] = React.useState(!project.image);

  return (
    <motion.div
      className="p-4 rounded-xl border border-zinc-900/80 bg-zinc-950/30 hover:border-amber-500/40 hover:bg-zinc-900/40 transition-all duration-300 flex flex-col justify-between group backdrop-blur-sm shadow-md"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
    >
      <div className="space-y-3.5">
        {/* Media Thumbnail */}
        <div className="w-full aspect-[16/9] overflow-hidden rounded-lg bg-zinc-950 border border-zinc-900/90 relative group-hover:border-zinc-700/60 transition-colors">
          {!imgError && project.image ? (
            <img
              src={project.image}
              alt={project.title}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover object-top rounded-lg group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-zinc-500">
              <span className="text-2xl font-bold">{project.title.charAt(0)}</span>
            </div>
          )}

          {/* Category Tag overlay */}
          {project.category && (
            <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md border border-zinc-800 text-[10px] font-semibold text-zinc-300">
              <Sparkles size={10} className="text-amber-400" />
              <span>{project.category}</span>
            </div>
          )}

          <div className="absolute top-2 right-2">
            <span
              className={`px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider rounded-md border ${
                isCompleted
                  ? "text-emerald-400 border-emerald-500/30 bg-black/80"
                  : "text-amber-400 border-amber-500/30 bg-black/80"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <h4 className="text-lg font-bold text-zinc-100 group-hover:text-amber-300 transition-colors line-clamp-1">
            {project.title}
          </h4>

          <p className="text-xs md:text-sm text-zinc-400 leading-relaxed line-clamp-3">
            {project.description}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex items-center gap-1.5 flex-wrap pt-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <SkillsBadge size="sm" key={tech}>
              {tech}
            </SkillsBadge>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[10px] text-zinc-500 font-medium px-1.5 py-0.5">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>
      </div>

      {/* Footer Links */}
      <div className="flex items-center justify-between gap-2 pt-4 mt-4 border-t border-zinc-900/60">
        <div>
          {project.repoLink ? (
            <Link
              href={project.repoLink}
              target="_blank"
              className="text-zinc-500 hover:text-white transition-colors p-1 flex items-center gap-1 text-xs"
              title="GitHub Repository"
            >
              <svg viewBox="0 0 128 128" fill="currentColor" width={16} height={16}>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                />
              </svg>
              <span>Code</span>
            </Link>
          ) : (
            <span className="text-[11px] text-zinc-600">Proprietary</span>
          )}
        </div>

        <Link
          href={project.liveLink}
          target="_blank"
          className="text-xs text-zinc-200 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 px-3 py-1.5 rounded-lg font-medium flex items-center gap-1 transition-all"
        >
          <span>Live Demo</span>
          <ExternalLink size={12} />
        </Link>
      </div>
    </motion.div>
  );
}
