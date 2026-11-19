"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Download, FileText } from "lucide-react";

const resumeUrl = "/resume/honours.resume.2026.pdf";
const pageDescriptions = [
  "Honours Bhadauria's resume: education, internships, projects, and technical skills",
  "Honours Bhadauria's resume: achievements and hackathon awards",
];

export default function ResumeCard() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function openResume() {
    setOpen(true);
    dialog.current?.showModal();
  }

  return (
    <>
      <button
        type="button"
        onClick={openResume}
        className="resume-shimmer relative inline-flex items-center gap-2 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900/70 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:-translate-y-0.5 hover:border-purple-400/50 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-purple-400"
      >
        <FileText size={16} className="text-purple-300" />
        <span>View resume</span>
      </button>
      <dialog
        ref={dialog}
        aria-label="Resume"
        onClose={() => setOpen(false)}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        className="fixed inset-0 m-auto h-[90dvh] max-h-[960px] w-[calc(100%-1rem)] max-w-3xl overflow-hidden rounded-2xl border border-zinc-700/70 bg-zinc-950 p-0 text-white shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm sm:w-[calc(100%-3rem)]"
      >
        <a
          href={resumeUrl}
          download
          aria-label="Download resume PDF"
          title="Download resume PDF"
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-950/90 text-zinc-200 shadow-lg backdrop-blur transition hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-purple-400"
        >
          <Download size={16} />
        </a>
        <div role="region" aria-label="Resume document" tabIndex={0} className="h-full overflow-auto overscroll-contain p-2 focus-visible:outline-none sm:p-3">
          {open ? (
            <div className="space-y-3">
              {pageDescriptions.map((description, index) => (
                <Image
                  key={description}
                  src={`/resume/page-${index + 1}.jpg`}
                  alt={description}
                  width={1546}
                  height={2000}
                  sizes="(min-width: 768px) 744px, 100vw"
                  quality={90}
                  className="block h-auto w-full rounded-sm bg-white"
                />
              ))}
            </div>
          ) : null}
        </div>
      </dialog>
    </>
  );
}
