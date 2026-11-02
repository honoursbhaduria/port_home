"use client";
import React from "react";
import { Layers, ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { projectCounts } from "@/data/projects";

export type ProjectTabType = "all" | "major" | "minor" | "users";

interface ProjectTabsProps {
  activeTab: ProjectTabType;
  setActiveTab: (tab: ProjectTabType) => void;
}

type TabItem = {
  id: ProjectTabType;
  label: string;
  count: number;
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  color?: string;
  activeColor?: string;
};

export default function ProjectTabs({
  activeTab,
  setActiveTab,
}: ProjectTabsProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const tabs: TabItem[] = [
    {
      id: "all",
      label: "All Projects",
      count: projectCounts.total,
      icon: Layers,
      color: "text-zinc-400",
      activeColor: "text-zinc-950",
    },
    {
      id: "major",
      label: "Major Projects",
      count: projectCounts.major,
    },
    {
      id: "minor",
      label: "Minor Projects",
      count: projectCounts.minor,
    },
    {
      id: "users",
      label: "Projects with Users",
      count: projectCounts.users,
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  // Close dropdown on outside click or escape key
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="w-full">
      {/* Mobile Dropdown View (< sm) */}
      <div className="relative sm:hidden" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/80 border border-zinc-800 text-zinc-200 transition-all cursor-pointer active:scale-[0.99] shadow-sm"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2.5 min-w-0">
            {currentTab.icon && (
              <currentTab.icon size={15} className="shrink-0 text-zinc-300" />
            )}
            <span className="text-sm font-semibold truncate">
              {currentTab.label}
            </span>
            <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-zinc-800 text-zinc-400 shrink-0">
              {currentTab.count}
            </span>
          </div>
          <ChevronDown
            size={16}
            className={`text-zinc-400 shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180 text-zinc-100" : ""
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="absolute left-0 right-0 top-full mt-2 z-50 p-1.5 rounded-xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 shadow-2xl space-y-1"
              role="listbox"
            >
              {tabs.map((tab) => {
                const isSelected = tab.id === activeTab;
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => {
                      setActiveTab(tab.id);
                      setIsOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all cursor-pointer ${
                      isSelected
                        ? "bg-white text-zinc-950 font-semibold shadow-sm"
                        : "text-zinc-300 hover:bg-zinc-900 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      {Icon && (
                        <Icon
                          size={15}
                          className={`shrink-0 ${
                            isSelected ? "text-zinc-950" : "text-zinc-400"
                          }`}
                        />
                      )}
                      <span className="truncate">{tab.label}</span>
                      <span
                        className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 ${
                          isSelected
                            ? "bg-zinc-200 text-zinc-950"
                            : "bg-zinc-800 text-zinc-400"
                        }`}
                      >
                        {tab.count}
                      </span>
                    </div>
                    {isSelected && (
                      <Check
                        size={16}
                        className="text-zinc-950 shrink-0 ml-2"
                      />
                    )}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop / Tablet Tab Pills (>= sm) */}
      <div className="hidden sm:flex items-center gap-2 sm:flex-wrap relative">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium flex items-center gap-2 transition-colors duration-250 cursor-pointer shrink-0 whitespace-nowrap ${
                isActive
                  ? "text-zinc-950 font-semibold border border-transparent"
                  : "bg-zinc-900/60 hover:bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 border border-zinc-800/80"
              }`}
              style={{
                zIndex: isActive ? 20 : 1,
              }}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectTabIndicator"
                  className="absolute inset-0 bg-white rounded-xl shadow-[0_2px_14px_rgba(255,255,255,0.2),0_1px_3px_rgba(0,0,0,0.3)] pointer-events-none"
                  style={{ zIndex: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 28,
                    mass: 0.8,
                  }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {Icon && (
                  <Icon
                    size={14}
                    className={`shrink-0 transition-colors duration-250 ${
                      isActive ? tab.activeColor : tab.color
                    }`}
                  />
                )}
                <span className="whitespace-nowrap">{tab.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-bold shrink-0 transition-colors duration-250 ${
                    isActive
                      ? "bg-zinc-200 text-zinc-900"
                      : "bg-zinc-800 text-zinc-400"
                  }`}
                >
                  {tab.count}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
