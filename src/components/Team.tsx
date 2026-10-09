"use client";

import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { team } from "@/data/site";
import { Avatar } from "./Avatar";
import { SectionHeading, SwapControls } from "./ui";

const fade = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
  centre: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
};

export function Team() {
  const [[active, dir], setState] = useState([0, 1]);
  const count = team.length;
  const go = (next: number, d: number) => setState([(next + count) % count, d]);
  const prev = () => go(active - 1, -1);
  const next = () => go(active + 1, 1);
  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -70) next();
    else if (info.offset.x > 70) prev();
  };
  const m = team[active];

  return (
    <section id="team" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading
        index="03"
        title="The team"
        text="Four engineers who have each shipped production systems. Meet them one at a time."
      />

      <div
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") next();
          if (e.key === "ArrowLeft") prev();
        }}
        className="outline-none"
      >
        <div className="relative overflow-hidden">
          <AnimatePresence custom={dir} mode="wait" initial={false}>
            <motion.article
              key={m.slug}
              custom={dir}
              variants={fade}
              initial="enter"
              animate="centre"
              exit="exit"
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={onDragEnd}
              className="grid cursor-grab gap-10 active:cursor-grabbing lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
            >
              <div className="group relative aspect-[4/5] max-h-[560px] overflow-hidden rounded-lg border border-line">
                <Avatar member={m} sizes="(min-width: 1024px) 520px, 90vw" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/60 to-transparent p-6 pt-20">
                  <div className="font-mono text-xs uppercase tracking-[0.3em] text-mute">
                    0{active + 1} / 0{count}
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold">{m.name}</div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{m.role}</div>
                <h3 className="mt-3 font-display text-3xl font-bold leading-tight md:text-4xl">{m.first}</h3>
                <p className="mt-2 text-mute">{m.line}</p>
                <p className="mt-7 text-base leading-relaxed md:text-lg">{m.bio}</p>

                {m.highlights?.length ? (
                  <ul className="mt-6 space-y-3 border-t border-line pt-6">
                    {m.highlights.map((h) => (
                      <li key={h} className="grid grid-cols-[20px_1fr] gap-3 text-sm text-mute">
                        <span className="mt-2.5 h-px w-4 bg-accent" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-8 flex flex-wrap gap-2">
                  {m.skills.map((s) => (
                    <span key={s} className="rounded-full border border-line px-3 py-1 text-xs text-mute">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-5 text-sm">
                  <a href={m.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink transition-colors hover:text-accent">
                    <Linkedin size={16} /> LinkedIn
                  </a>
                  <a href={m.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-ink transition-colors hover:text-accent">
                    <Github size={16} /> GitHub
                  </a>
                  <a href={`mailto:${m.email}`} className="flex items-center gap-2 text-ink transition-colors hover:text-accent">
                    <Mail size={16} /> {m.email}
                  </a>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            {team.map((t, i) => (
              <button
                key={t.slug}
                type="button"
                aria-label={`Show ${t.first}`}
                onClick={() => go(i, i > active ? 1 : -1)}
                className={`group relative h-12 w-12 cursor-pointer overflow-hidden rounded-full border transition-all duration-300 ${
                  i === active ? "border-accent scale-110" : "border-line opacity-60 hover:opacity-100"
                }`}
              >
                <Avatar member={t} sizes="48px" />
              </button>
            ))}
          </div>
          <div className="md:w-72">
            <SwapControls
              count={count}
              active={active}
              onPrev={prev}
              onNext={next}
              onPick={(i) => go(i, i > active ? 1 : -1)}
              label="member"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
