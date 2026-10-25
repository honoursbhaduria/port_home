"use client";
import React from "react";
import SectionDivider from "@/components/SectionDivider";
import SectionHeading from "@/components/SectionHeading";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { FolderGit2 } from "lucide-react";
import ProjectTabs, {
  ProjectTabType,
} from "@/components/projects/ProjectTabs";
import MajorProjectsSection from "@/sections/projects/MajorProjectsSection";
import MinorProjectsSection from "@/sections/projects/MinorProjectsSection";
import UsersProjectsSection from "@/sections/projects/UsersProjectsSection";
import { projectCounts } from "@/data/projects";

export default function ProjectsSection() {
  const [activeTab, setActiveTab] = React.useState<ProjectTabType>("all");

  return (
    <>
      <section className="w-full scroll-m-27.5" id="projects">
        <div className="container space-y-6 md:space-y-8">
          <SectionHeadingPill>
            <FolderGit2 size={18} className="text-pink-400" />
            <p>Projects</p>
          </SectionHeadingPill>

          <SectionHeading subText="Projects categorized by scale and impact — from production systems serving active users, to deep-engineering flagship applications, and specialized developer tools.">
            <div className="flex items-center gap-3">
              <span>My Creations</span>
              <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                <div className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-pink-500"></span>
                </div>
                <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">
                  {projectCounts.total} Projects Live
                </span>
              </div>
            </div>
          </SectionHeading>

          {/* Category Tabs for Fast Switching */}
          <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Categorized Project Sections */}
          <div className="space-y-14 pt-2">
            {/* 1. Major Projects Section */}
            {(activeTab === "all" || activeTab === "major") && (
              <MajorProjectsSection />
            )}

            {/* 2. Minor Projects Section (2-Column Grid) */}
            {(activeTab === "all" || activeTab === "minor") && (
              <MinorProjectsSection isSingleTab={activeTab === "minor"} />
            )}

            {/* 3. Projects with Users Section (Live in Production) */}
            {(activeTab === "all" || activeTab === "users") && (
              <UsersProjectsSection />
            )}
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}
