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
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      className="p-1 rounded-md border border-zinc-900 flex gap-3 flex-col md:flex-row cursor-pointer hover:border-zinc-800 transition duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.15 * idx - 0.15 }}
    >
      <div className="w-full h-[280px] md:h-[200px] md:w-60 overflow-hidden relative bg-zinc-950 flex items-center justify-center rounded-sm border border-zinc-900">
        {!imgError ? (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover rounded-sm"
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

      <div className="space-y-3 flex-1 p-3">
        <div className="flex items-center justify-between gap-4 text-xl ">
          <h2>{project.title}</h2>
        </div>

        <div className="text-sm text-secondaryText line-clamp-4">
          <p>{project.description}</p>
        </div>

        <div className="flex items-center gap-2 flex-wrap mt-3">
          {project.technologies.map((tech) => (
            <SkillsBadge size="sm" key={tech}>
              {tech}
            </SkillsBadge>
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            <div
              className={`px-1 py-1 flex items-center text-[11px] font-normal rounded-full ${
                isCompleted
                  ? "text-green-400 bg-green-900/10"
                  : "text-yellow-400 bg-yellow-900/10"
              }`}
            >
              {project.status}
            </div>
            {project.isUpdatingConstantly && (
              <div className="px-1 py-1 flex items-center text-[11px] font-normal rounded-full text-blue-400 bg-blue-900/10">
                Updating Constantly
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {project.repoLink && (
              <Link href={project.repoLink} target="_blank">
                <svg
                  viewBox="0 0 128 128"
                  fill="#d6d6d6"
                  width={16}
                  height={16}
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"
                    ></path>
                    <path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
                  </g>
                </svg>
              </Link>
            )}
            <Link
              href={project.liveLink}
              target="_blank"
              className="text-[11px] text-black bg-gradient-to-b from-white to-stone-300 rounded-md font-medium px-2 py-0.5 hover:from-stone-200"
            >
              Website
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
