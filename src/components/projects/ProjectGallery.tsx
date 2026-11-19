"use client";

import { useState } from "react";
import ProjectTabs, { ProjectTabType } from "./ProjectTabs";
import MajorProjectsSection from "@/sections/projects/MajorProjectsSection";
import MinorProjectsSection from "@/sections/projects/MinorProjectsSection";
import UsersProjectsSection from "@/sections/projects/UsersProjectsSection";

export default function ProjectGallery() {
  const [activeTab, setActiveTab] = useState<ProjectTabType>("all");

  return (
    <div className="space-y-8">
      <ProjectTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="space-y-10 sm:space-y-14">
        {(activeTab === "all" || activeTab === "major") && <MajorProjectsSection />}
        {(activeTab === "all" || activeTab === "minor") && <MinorProjectsSection isSingleTab />}
        {(activeTab === "all" || activeTab === "users") && <UsersProjectsSection />}
      </div>
    </div>
  );
}
