import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import ExperienceCard from "@/components/ExperienceCard";
import { BriefcaseBusiness } from "lucide-react";
import React from "react";
import { ExperienceType } from "@/types";

const experience: ExperienceType[] = [
  {
    title: "Full Stack Developer Intern",
    company: "PearlThoughts",
    image: "/experience/pearl-thoughts.png",
    video: "/experience/pearl-thoughts.mp4",
    companyLink: "https://pearlthoughts.com/",
    duration: "Jun 2026 – Jul 2026",
    description: "Built full-stack features for doctor–patient scheduling workflows.",
    highlights: [
      "Developed REST APIs and backend features for doctor–patient scheduling workflows.",
      "Worked with Django, React.js, MongoDB, BullMQ, and LangGraph-based features.",
    ],
    technologies: ["Django", "React.js", "MongoDB", "BullMQ", "LangGraph"],
  },
  {
    title: "Backend Developer Intern",
    company: "LawVriksh",
    image: "/experience/lawvriksh.png",
    video: "/experience/lawvriksh.mp4",
    companyLink: "https://www.lawvriksh.com/",
    duration: "Apr 2026 – May 2026",
    description: "Developed backend services for a legal-tech platform.",
    highlights: [
      "Built FastAPI microservices and backend APIs for case and client management.",
      "Worked on authentication, business logic, gRPC APIs, and PDF document processing.",
    ],
    technologies: ["FastAPI", "Django", "Python", "gRPC", "Microservices"],
  },
  {
    title: "AI Engineer Intern",
    company: "Twiggle",
    image: "/experience/twiggle.png",
    video: "/experience/twiggle.mp4",
    companyLink: "https://www.twiggle.co.in/",
    duration: "Nov 2025 – Apr 2026",
    description: "Built backend and AI features for personalized travel planning.",
    highlights: [
      "Built Django backend features for personalized trips and travel recommendations.",
      "Developed multi-step travel planning workflows using LangChain and LangGraph.",
    ],
    technologies: ["Django", "Python", "LangChain", "LangGraph"],
  },
  {
    title: "Open Source Contributor & Maintainer",
    company: "CyberVidya",
    image: "/projects/users/cybervidya.pages.dev.png",
    video: "/projects/users/cybervidya.pages.dev.mp4",
    companyLink: "https://cybervidya.pages.dev/",
    duration: "2025 – Present",
    description: "Developed attendance management features for college students.",
    highlights: [
      "Developed attendance management features serving 2,500+ daily student visits.",
      "Co-maintain the platform, ship features, and resolve bugs with two maintainers.",
    ],
    technologies: ["React", "Next.js", "TypeScript", "WebSockets"],
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
