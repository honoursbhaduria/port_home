"use client";
import { ProjectType } from "@/types";
import React from "react";
import SkillsBadge from "@/components/SkillsBadge";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Rocket } from "lucide-react";

export default function MajorProjectCard({
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
      className="p-4 md:p-5 rounded-2xl border border-pink-500/20 bg-gradient-to-b from-zinc-950/40 via-zinc-950/20 to-pink-950/5 backdrop-blur-sm flex gap-5 md:gap-8 flex-col lg:flex-row hover:border-pink-500/50 hover:bg-zinc-900/40 transition-all duration-500 group relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.08 }}
    >
      {/* Decorative gradient blur in background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-pink-500/5 rounded-full blur-3xl pointer-events-none -z-10 group-hover:bg-pink-500/10 transition-colors duration-500" />

      {/* Media Container */}
      <div className="w-full aspect-[16/10] lg:aspect-auto lg:h-[240px] lg:w-[460px] shrink-0 overflow-hidden relative bg-zinc-950 rounded-xl border border-zinc-900/80 group-hover:border-pink-500/40 transition-colors duration-500 shadow-xl">
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden bg-black">
            <div className="size-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-2xl relative z-10">
              <span className="text-3xl font-black bg-gradient-to-br from-pink-400 to-zinc-500 bg-clip-text text-transparent">
                {project.title.charAt(0)}
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-bold uppercase tracking-wider mt-3">
              {project.title}
            </p>
          </div>
        )}

        {/* Floating Flagship Badge over image */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-pink-500/30 text-pink-300 text-[10px] font-bold uppercase tracking-wider">
          <Rocket size={11} className="text-pink-400" />
          <span>Major Project</span>
        </div>
      </div>

      {/* Content Container */}
      <div className="space-y-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-3 flex-wrap">
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              {project.title}
            </h3>
            {project.category && (
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/20">
                {project.category}
              </span>
            )}
          </div>

          <div className="text-sm md:text-base text-zinc-400 leading-relaxed line-clamp-3 md:line-clamp-4">
            <p>{project.description}</p>
          </div>

          <div className="flex items-center gap-2 flex-wrap pt-1">
            {project.technologies.map((tech) => (
              <SkillsBadge size="sm" key={tech}>
                {tech}
              </SkillsBadge>
            ))}
          </div>
        </div>

        {/* Footer info & CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4 pt-4 border-t border-zinc-900/70">
          <div className="flex items-center gap-2">
            <div
              className={`px-2.5 py-0.5 flex items-center text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-full border ${
                isCompleted
                  ? "text-emerald-400 border-emerald-500/20 bg-emerald-500/5"
                  : "text-amber-400 border-amber-500/20 bg-amber-500/5"
              }`}
            >
              {project.status}
            </div>
            {project.isUpdatingConstantly && (
              <div className="px-2.5 py-0.5 flex items-center text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-full text-blue-400 border border-blue-500/20 bg-blue-500/5">
                Live Updates
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {project.repoLink && (
              <Link
                href={project.repoLink}
                target="_blank"
                className="p-2 rounded-lg border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 bg-zinc-950 hover:bg-zinc-900 transition-all"
                title="View Source Code"
              >
                <svg
                  viewBox="0 0 128 128"
                  fill="currentColor"
                  width={18}
                  height={18}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                  />
                </svg>
              </Link>
            )}
            <Link
              href={project.liveLink}
              target="_blank"
              className="text-xs md:text-sm text-black bg-white hover:bg-zinc-200 active:scale-95 transition-all rounded-lg font-bold px-4 py-2 flex items-center gap-1.5 shadow-[0_0_20px_rgba(255,255,255,0.15)]"
            >
              <span>Visit Live Site</span>
              <ExternalLink size={13} />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
