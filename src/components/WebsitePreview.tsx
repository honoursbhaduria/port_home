"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

export default function WebsitePreview({
  image,
  video,
  title,
}: {
  image: string;
  video?: string;
  title: string;
}) {
  const container = useRef<HTMLButtonElement>(null);
  const player = useRef<HTMLVideoElement>(null);
  const requested = useRef(false);
  const pointerType = useRef("");
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const stop = useCallback(() => {
    requested.current = false;
    setPlaying(false);
    const element = player.current;
    if (element) {
      element.pause();
      if (element.readyState > 0) element.currentTime = 0;
    }
  }, []);

  async function start() {
    const element = player.current;
    if (!element || !video || failed) return;
    requested.current = true;
    // Load only after hover or tap, preserving the user gesture on mobile.
    if (!element.getAttribute("src")) element.src = video;
    try {
      await element.play();
      if (!requested.current) element.pause();
    } catch {
      if (requested.current) stop();
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) stop();
    });
    if (container.current) observer.observe(container.current);
    const onVisibilityChange = () => { if (document.hidden) stop(); };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [stop]);

  return (
    <button
      ref={container}
      type="button"
      aria-label={`Preview ${title} website`}
      aria-pressed={playing}
      onPointerDown={(event) => { pointerType.current = event.pointerType; }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse" && window.matchMedia("(hover: hover)").matches) void start();
      }}
      onPointerLeave={(event) => { if (event.pointerType === "mouse") stop(); }}
      onClick={(event) => {
        if (event.detail === 0 || pointerType.current !== "mouse") {
          if (requested.current) stop(); else void start();
        }
      }}
      onBlur={stop}
      className="relative block w-full aspect-[16/10] md:aspect-auto md:h-[240px] md:w-[450px] shrink-0 cursor-pointer overflow-hidden rounded-xl border border-zinc-900/80 bg-zinc-950 p-0 text-left transition-colors duration-500 group-hover:border-zinc-700/50 focus-visible:outline-2 focus-visible:outline-purple-400"
    >
      <Image
        src={image}
        alt={`${title} website preview`}
        fill
        sizes="(min-width: 768px) 450px, (min-width: 640px) 600px, 100vw"
        className="object-cover object-top"
      />
      {video && !failed ? (
        <video
          ref={player}
          muted
          loop
          playsInline
          preload="none"
          controls={false}
          disablePictureInPicture
          aria-hidden="true"
          onPlaying={() => {
            if (requested.current) setPlaying(true); else player.current?.pause();
          }}
          onPause={() => setPlaying(false)}
          onError={() => { stop(); setFailed(true); }}
          className={`pointer-events-none absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-200 ${playing ? "opacity-100" : "opacity-0"}`}
        />
      ) : null}
    </button>
  );
}
