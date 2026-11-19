import React from "react";
import SkillsIcon from "./SkillsIcon";
import { skillsBadgeType } from "@/types";

export default function SkillsBadge({
  children,
  icon,
  size = "base",
}: skillsBadgeType) {
  return (
    <div
      className={`border hover:-translate-y-0.5  border-zinc-900 hover:bg-white/5 rounded-lg transition duration-300 cursor-pointer flex items-center justify-center gap-2  ${
        size === "sm"
          ? "font-normal text-[11px] px-2 py-1"
          : "font-medium text-sm px-3 py-1 "
      } `}
    >
      {size === "base" && icon && (
        <div aria-hidden="true" className="flex size-7 shrink-0 items-center justify-center rounded-md bg-white/5 p-1">
          <SkillsIcon icon={icon} />
        </div>
      )}
      {children}
    </div>
  );
}
