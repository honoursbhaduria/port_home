"use client";
import { Calendar, ChevronRight, ExternalLink } from "lucide-react";
import React from "react";
import SkillsBadge from "./SkillsBadge";
import { ExperienceType } from "@/types";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ExperienceCard({
  experience,
}: {
  experience: ExperienceType;
}) {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  return (
    <div
      className="p-4 border border-zinc-900 rounded-md cursor-pointer group hover:border-zinc-800 transition duration-300"
      onClick={() => setExpanded((cur) => !cur)}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-1 min-w-0">
          <h4 className="text-lg font-semibold truncate">{experience.title}</h4>
          <ChevronRight
            size={18}
            strokeWidth={3}
            className={`flex-shrink-0 opacity-0 group-hover:opacity-90 transition duration-300 ${
              expanded ? "rotate-90" : ""
            }`}
          />
        </div>

        <div className="flex-shrink-0 px-3 py-1 rounded-full bg-white/5 text-[10px] md:text-xs font-medium flex items-center gap-2 text-nowrap">
          <Calendar className="size-3 md:size-3.5" />
          <p>{experience.duration}</p>
        </div>
      </div>

      <div className="mt-1">
        {experience.company && (
          experience.companyLink ? (
            <Link 
              href={experience.companyLink} 
              target="_blank" 
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-secondaryText text-sm hover:text-white transition group/link overflow-hidden max-w-full"
            >
              <span className="truncate">{experience.company}</span>
              <ExternalLink size={12} className="flex-shrink-0 opacity-0 group-hover/link:opacity-100 transition" />
            </Link>
          ) : (
            <p className="text-secondaryText text-sm break-words line-clamp-1">{experience.company}</p>
          )
        )}
      </div>

      <div
        className={`transition-all ease-in-out   duration-400 grid overflow-hidden mt-4 ${
          expanded ? "opacity-100 grid-rows-[1fr]" : "opacity-0 grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className={`text-sm text-secondaryText `}>
            {experience.description}
          </p>

          <AnimatePresence>
            {expanded && (
              <div className={`flex items-center flex-wrap gap-2 mt-3`}>
                {experience.technologies.map((tech, idx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, translateX: 20 }}
                    animate={{ opacity: 1, translateX: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                  >
                    <SkillsBadge size="sm">{tech}</SkillsBadge>
                  </motion.div>
                ))}
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
