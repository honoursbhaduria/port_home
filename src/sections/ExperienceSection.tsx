import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import ExperienceCard from "@/components/ExperienceCard";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { ExperienceType } from "@/types";

const experience: ExperienceType[] = [
  {
    title: "NestJS Backend Developer",
    company: "Pearl Thoughts",
    companyLink: "https://pearlthoughts.com/",
    duration: "Jan 2026 - Present",
    description:
      "Developing scalable backend architectures using NestJS and TypeScript. Implementing robust microservices and maintaining high-performance APIs for production environments.",
    technologies: ["NestJS", "TypeScript", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    title: "Backend Intern",
    company: "LawVriksh",
    companyLink: "https://www.lawvriksh.com/",
    duration: "Apr 2026 - May 2026",
    description:
      "Developing production-ready backend services for a legal knowledge platform. Focusing on building scalable APIs and managing legal data efficiently using FastAPI.",
    technologies: ["FastAPI", "Python", "REST API", "PostgreSQL"],
  },
  {
    title: "Backend Developer",
    company: "Stealth Startup",
    companyLink: "https://www.twiggle.co.in/",
    duration: "Nov 2025 - Apr 2026",
    description:
      "Engineered production backend services using Django; architected REST APIs at scale for frontend and third-party integrations. Drove reliability improvements in collaboration with the core product team.",
    technologies: ["Django", "Python", "REST API", "PostgreSQL"],
  },
  {
    title: "Open Source Contributor & Maintainer",
    company: "CyberVidya",
    companyLink: "https://cybervidya.pages.dev/",
    duration: "2025 - Present",
    description:
      "Co-maintain cybersecurity education platform with 2000+ daily active users; ship features and resolve bugs with 2 maintainers.",
    technologies: ["React", "TypeScript", "Node.js", "Cybersecurity"],
  },
];

export default function ExperienceSection() {
  return (
    <>
      <section className="w-full scroll-m-27.5" id="experience">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <BriefcaseBusiness size={18} className="text-amber-500" />
            <p>Experience</p>
          </SectionHeadingPill>

          <SectionHeading subText="Applying my skills in real-world projects to deliver scalable and impactful solutions, while creating projects and participating in hackathons.">
            Professional Experience
          </SectionHeading>

          <div className="grid grid-cols-1 gap-4">
            {experience.map((exp, idx) => (
              <ExperienceCard key={idx} experience={exp} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}
