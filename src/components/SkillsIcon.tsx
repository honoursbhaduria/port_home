import Image from "next/image";
import { IconsType } from "@/types";

export default function SkillsIcon({ icon }: { icon: IconsType }) {
  if (!icon) return null;

  return (
    <Image
      src={`/icons/${icon}.svg`}
      alt=""
      aria-hidden="true"
      width={20}
      height={20}
      className="size-full object-contain"
    />
  );
}
