"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, X } from "lucide-react";
import MobileNav from "./MobileNav";

type navLinkType = {
  label: string;
  id: string;
};

export const navLinks: navLinkType[] = [
  { label: "Intro", id: "intro" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState<boolean>(false);

  return (
    <>
      <nav className="fixed top-5 -translate-x-1/2 left-1/2  z-50 border border-zinc-900 rounded-md w-[95%] max-w-[1024px] backdrop-blur-sm bg-background/60">
        <div className=" px-5 py-2 flex items-center justify-between">
          <Link href="/" aria-label="Home" className="rounded-full size-8 overflow-hidden bg-stone-200 aspect-square flex items-center justify-center text-stone-800 font-medium text-lg">
            <span>H</span>
          </Link>

          <div className="hidden md:block">
            <ul className="flex items-center text-sm text-secondaryText">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                >
                  <Link href={pathname === "/projects" && link.id === "projects" ? "/projects" : `/#${link.id}`} className="block px-4 py-1 hover:text-foreground transition duration-300">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <button
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavOpen}
            className="md:hidden cursor-pointer p-1 hover:bg-white/10  rounded-lg transition duration-200"
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          >
            {isMobileNavOpen ? (
              <>
                <X />
              </>
            ) : (
              <>
                <MenuIcon />
              </>
            )}
          </button>
        </div>
        <MobileNav isOpen={isMobileNavOpen} setIsOpen={setIsMobileNavOpen} />
      </nav>

      {isMobileNavOpen && (
        <div
          className="md:hidden flex fixed z-49 inset-0 bg-black/20 backdrop-blur-sm"
          onClick={() => setIsMobileNavOpen(false)}
        />
      )}
    </>
  );
}
