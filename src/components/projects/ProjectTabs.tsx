"use client";
import React from "react";
import { Layers, Rocket, Sparkles, Users } from "lucide-react";
import { projectCounts } from "@/data/projects";

export type ProjectTabType = "all" | "major" | "minor" | "users";

interface ProjectTabsProps {
  activeTab: ProjectTabType;
  setActiveTab: (tab: ProjectTabType) => void;
}

export default function ProjectTabs({
  activeTab,
  setActiveTab,
}: ProjectTabsProps) {
  const tabs = [
    {
      id: "all" as const,
      label: "All Projects",
      count: projectCounts.total,
      icon: Layers,
      color: "text-zinc-400",
      activeColor: "text-zinc-950",
    },
    {
      id: "major" as const,
      label: "Major Projects",
      count: projectCounts.major,
      icon: Rocket,
      color: "text-pink-400",
      activeColor: "text-pink-600",
    },
    {
      id: "minor" as const,
      label: "Minor Projects",
      count: projectCounts.minor,
      icon: Sparkles,
      color: "text-amber-400",
      activeColor: "text-amber-600",
    },
    {
      id: "users" as const,
      label: "Projects with Users",
      count: projectCounts.users,
      icon: Users,
      color: "text-emerald-400",
      activeColor: "text-emerald-600",
    },
  ];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium flex items-center gap-2 transition-all duration-200 cursor-pointer ${
              isActive
                ? "bg-white text-zinc-950 shadow-lg font-semibold"
                : "bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80"
            }`}
          >
            <Icon
              size={15}
              className={isActive ? tab.activeColor : tab.color}
            />
            <span>{tab.label}</span>
            <span
              className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold ${
                isActive
                  ? "bg-zinc-200 text-zinc-900"
                  : "bg-zinc-800 text-zinc-400"
              }`}
            >
              {tab.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
