"use client";

import { useState } from "react";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import { projects } from "@/data/site";
import { SectionHeading, SwapControls } from "./ui";

const slide = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
  centre: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
};

export function Work() {
  const [[active, dir], setState] = useState([0, 1]);
  const count = projects.length;
  const go = (next: number, d: number) => setState([(next + count) % count, d]);
  const prev = () => go(active - 1, -1);
  const next = () => go(active + 1, 1);
  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -70) next();
    else if (info.offset.x > 70) prev();
  };

  const p = projects[active];

  return (
    <section id="work" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
        <SectionHeading
          index="02"
          title="What we are building"
          text="One product at a time. Swipe, drag or use the arrows to move between them."
        />

        <div
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") next();
            if (e.key === "ArrowLeft") prev();
          }}
          className="outline-none"
          aria-roledescription="carousel"
        >
          <div className="relative min-h-[460px] overflow-hidden">
            <AnimatePresence custom={dir} mode="wait" initial={false}>
              <motion.article
                key={p.index}
                custom={dir}
                variants={slide}
                initial="enter"
                animate="centre"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={onDragEnd}
                className="grid cursor-grab gap-10 active:cursor-grabbing lg:grid-cols-[0.8fr_1.2fr]"
              >
                <div className="relative">
                  <div className="font-display text-[120px] font-extrabold leading-none text-ink/[0.06] md:text-[180px]">
                    {p.index}
                  </div>
                  <div className="-mt-10 md:-mt-16">
                    <div className="mb-3 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.25em] text-mute">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${p.placeholder ? "bg-mute" : "bg-accent"}`}
                      />
                      {p.status}
                    </div>
                    <h3 className="font-display text-4xl font-bold leading-tight md:text-5xl">{p.name}</h3>
                    <p className="mt-3 text-lg text-mute">{p.kicker}</p>
                  </div>
                </div>

                <div className="lg:pt-10">
                  <p className="text-lg leading-relaxed">{p.summary}</p>
                  <ul className="mt-8 space-y-4 border-t border-line pt-8">
                    {p.points.map((pt) => (
                      <li key={pt} className="grid grid-cols-[20px_1fr] gap-4 text-mute">
                        <span className="mt-2 h-px w-4 bg-accent" />
                        <span className="leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-2">
                    {p.stack.map((t) => (
                      <span key={t} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-mute">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>
          </div>

          <div className="mt-12 border-t border-line pt-6">
            <SwapControls
              count={count}
              active={active}
              onPrev={prev}
              onNext={next}
              onPick={(i) => go(i, i > active ? 1 : -1)}
              label="project"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
