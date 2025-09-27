"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export function FloatingDockWrapper() {
  const links = [
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/__Honours__",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Honoursbhaduria",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/honours-bhadauria-49714a326/",
    },
    {
      title: "Email",
      icon: (
        <IconBrandGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "mailto:honoursbhadauria@gmail.com",
    },
  ];

  const inView = useInView("contact", { threshold: 0.3 });
  return (
    <AnimatePresence>
      {!inView && (
        <motion.div
          className="fixed bottom-6 right-6  md:right-1/2 md:translate-x-1/2 z-50"
          key="dock"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <FloatingDock items={links} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
