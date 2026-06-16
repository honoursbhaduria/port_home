"use client";
import SectionDivider from "@/components/SectionDivider";
import SectionHeadingPill from "@/components/SectionHeadingPill";
import { Handshake } from "lucide-react";
import React from "react";
import Image from "next/image";
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

            <div 
              className="relative size-30 md:size-40 cursor-pointer [perspective:1000px]"
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

            <div className="text-5xl font-bold tracking-tight">
              <h1>Hi, I&apos;m Honours Bhadauria</h1>
            </div>

            <div className="text-secondaryText text-xl md:text-2xl leading-6 md:leading-8">
              <h2>
                A{" "}
                <span className="text-white font-medium">
                  Full-Stack Developer
                </span>{" "}
                from Delhi, India, passionate about building modern, scalable,
                and impactful digital experiences.
              </h2>
            </div>

            <div className="text-secondaryText text-sm md:text-base ">
              <p>
                I specialize in creating web apps using{" "}
                <span className="text-white font-medium">
                  Django, React, Next.js, LangChain, Tailwind CSS, and PostgreSQL
                </span>
                . I&apos;m Always eager to learn, grow, and take on new
                challenges in AI and Full-Stack development.
              </p>
              <p>
                If my skills can be of value to you,{" "}
                <span className="text-white font-medium">
                  let&apos;s connect
                </span>{" "}
                and create something impactful together.
              </p>
            </div>

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
