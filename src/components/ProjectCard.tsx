"use client";
import { ProjectType } from "@/types";
import React from "react";
import SkillsBadge from "./SkillsBadge";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectCard({
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
      className="p-3 md:p-4 rounded-2xl border border-zinc-900/50 bg-zinc-950/20 backdrop-blur-sm flex gap-4 md:gap-8 flex-col md:flex-row cursor-pointer hover:border-zinc-800/80 hover:bg-zinc-900/30 transition-all duration-500 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
    >
      <div className="w-full aspect-[16/10] md:aspect-auto md:h-[240px] md:w-[450px] shrink-0 overflow-hidden relative bg-zinc-950 rounded-xl border border-zinc-900/80 group-hover:border-zinc-700/50 transition-colors duration-500">
        {!imgError && project.image ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-top rounded-xl transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Animated Background Proxy */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-[spin_20s_linear_infinite] bg-[conic-gradient(from_0deg,transparent,rgba(168,85,247,0.4),transparent)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,black_70%)]" />
            </div>

            {/* Geometric Proxy Shapes */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="relative">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -inset-4 bg-pink-500/20 blur-xl rounded-full"
                />
                <div className="size-16 rounded-2xl bg-zinc-900 border border-white/10 flex items-center justify-center shadow-2xl relative z-10">
                  <span className="text-3xl font-black bg-gradient-to-br from-white to-zinc-500 bg-clip-text text-transparent">
                    {project.title.charAt(0)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <p className="text-[11px] text-white font-bold uppercase tracking-[0.2em]">
                  {project.title}
                </p>
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-zinc-500 to-transparent mt-2" />
              </div>
            </div>

            {/* Scanning Line Effect */}
            <motion.div
              animate={{
                top: ["-10%", "110%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-pink-500/30 to-transparent z-20"
            />
          </div>
        )}
      </div>

      <div className="space-y-4 flex-1 py-1 md:py-2 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-zinc-100 group-hover:text-white transition-colors">
              {project.title}
            </h2>
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

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-900/50">
          <div className="flex items-center gap-2">
            <div
              className={`px-2.5 py-0.5 flex items-center text-[10px] md:text-[11px] font-bold uppercase tracking-wider rounded-full border ${
                isCompleted
                  ? "text-green-400 border-green-500/20 bg-green-500/5"
                  : "text-yellow-400 border-yellow-500/20 bg-yellow-500/5"
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

          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-end">
            {project.repoLink && (
              <Link href={project.repoLink} target="_blank" className="hover:scale-110 transition-transform">
                <svg
                  viewBox="0 0 128 128"
                  fill="#71717a"
                  className="hover:fill-white transition-colors"
                  width={20}
                  height={20}
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                  </g>
                </svg>
              </Link>
            )}
            <Link
              href={project.liveLink}
              target="_blank"
              className="text-xs md:text-sm text-black bg-white hover:bg-zinc-200 active:scale-95 transition-all rounded-lg font-bold px-4 py-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Visit Live Site
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
