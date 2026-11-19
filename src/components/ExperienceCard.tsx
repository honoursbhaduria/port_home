import { Calendar, ExternalLink } from "lucide-react";
import SkillsBadge from "./SkillsBadge";
import WebsitePreview from "./WebsitePreview";
import { ExperienceType } from "@/types";

export default function ExperienceCard({ experience }: { experience: ExperienceType }) {
  return (
    <article className="group flex flex-col gap-4 rounded-2xl border border-zinc-900/50 bg-zinc-950/20 p-3 backdrop-blur-sm transition duration-500 hover:border-zinc-800/80 hover:bg-zinc-900/30 sm:p-4 md:flex-row md:gap-8">
      <WebsitePreview image={experience.image} video={experience.video} title={experience.company ?? experience.title} />
      <div className="flex min-w-0 flex-1 flex-col justify-between space-y-3 py-1 md:py-2">
        <div className="space-y-2.5">
          <div>
            <p className="mb-1 text-sm font-medium text-purple-300">{experience.company}</p>
            <h3 className="text-lg font-bold tracking-tight text-zinc-100 sm:text-xl">{experience.title}</h3>
          </div>
          <p className="flex items-center gap-2 text-xs text-zinc-400"><Calendar size={13} />{experience.duration}</p>
          <ul className="list-disc space-y-1.5 pl-4 text-sm leading-relaxed text-zinc-400 marker:text-zinc-600">
            {experience.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
          </ul>
          <div className="flex flex-wrap gap-1.5 pt-1">
            {experience.technologies.map((tech) => <SkillsBadge key={tech} size="sm">{tech}</SkillsBadge>)}
          </div>
        </div>
        {experience.companyLink ? (
          <div className="flex justify-end border-t border-zinc-900/50 pt-3">
            <a href={experience.companyLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-white px-3.5 py-1.5 text-xs font-bold text-black transition hover:bg-zinc-200 sm:px-4 sm:py-2 md:text-sm">Visit website <ExternalLink size={13} /></a>
          </div>
        ) : null}
      </div>
    </article>
  );
}
