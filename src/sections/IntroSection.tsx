"use client";
import SectionDivider from "@/components/SectionDivider";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { Handshake } from "lucide-react";
import React from "react";
import Image from "next/image";
import ResumeCard from "@/components/ResumeCard";
import GithubHeatmap from "@/components/GithubHeatmap";
import { motion } from "framer-motion";

export default function IntroSection() {
  const [isFlipped, setIsFlipped] = React.useState(false);

  return (
    <>
      <section id="intro" className="w-full pt-30 md:pt-40">
        <div className="container w-full">
          <div className="space-y-6 md:space-y-8">
            <SectionHeadingPill>
              <Handshake size={18} className="text-purple-400" />
              <p>Introduction</p>
            </SectionHeadingPill>

            <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8">
              <div
                className="relative shrink-0 size-30 md:size-40 cursor-pointer [perspective:1000px]"
                onMouseEnter={() => setIsFlipped(true)}
                onMouseLeave={() => setIsFlipped(false)}
              >
                <motion.div
                  className="relative w-full h-full [transform-style:preserve-3d]"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 [backface-visibility:hidden] overflow-hidden rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.3)]">
                    <Image
                      src="/favicon.ico"
                      alt="Avatar Front"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] overflow-hidden rounded-full shadow-[0_0_0_2px_rgba(255,255,255,0.3)]">
                    <Image
                      src="/avatar-hover.jpg"
                      alt="Avatar Back"
                      width={160}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>

              <ResumeCard />
            </div>

            <div className="text-5xl font-bold tracking-tight">
              <h1>Hi, I&apos;m Honours Bhadauria</h1>
            </div>

            <p className="max-w-3xl text-base leading-relaxed text-secondaryText md:text-lg md:leading-8">
              I&apos;m a <span className="font-medium text-white">Full-Stack Developer</span> from Delhi, India,
              building scalable web apps and AI experiences with Django, React, Next.js,
              LangChain, Tailwind CSS, and PostgreSQL. Always learning and open to new
              challenges — let&apos;s connect and build something impactful.
            </p>

            <div className="w-full flex items-center justify-center calendar-container ">
              <GithubHeatmap />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />
    </>
  );
}
