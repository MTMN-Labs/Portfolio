"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Fades and lifts children in when they scroll into view.
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  index,
  title,
  text,
}: {
  index: string;
  title: string;
  text?: string;
}) {
  return (
    <Reveal className="mb-14 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
      <div>
        <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-mute">
          <span className="text-accent">{index}</span>
          <span className="h-px w-10 bg-line" />
          <span>{title}</span>
        </div>
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
      {text ? <p className="max-w-md text-base leading-relaxed text-mute">{text}</p> : null}
    </Reveal>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  className?: string;
}) {
  const base =
    "inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-sm font-semibold transition-transform duration-300 will-change-transform hover:-translate-y-0.5";
  const look =
    variant === "solid"
      ? "bg-accent text-bg hover:bg-white"
      : "border border-line text-ink hover:border-ink/40";
  const external = href.startsWith("http") || href.startsWith("mailto:");
  return (
    <a
      href={href}
      className={`${base} ${look} ${className}`}
      target={external && !href.startsWith("mailto:") ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
    >
      {children}
    </a>
  );
}

// Previous / next arrows plus dot indicators used by both swappers.
export function SwapControls({
  count,
  active,
  onPrev,
  onNext,
  onPick,
  label,
}: {
  count: number;
  active: number;
  onPrev: () => void;
  onNext: () => void;
  onPick: (i: number) => void;
  label: string;
}) {
  return (
    <div className="flex items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${label} ${i + 1}`}
            onClick={() => onPick(i)}
            className="group h-6 w-10 cursor-pointer"
          >
            <span
              className={`block h-px w-full transition-all duration-500 ${
                i === active ? "bg-accent" : "bg-line group-hover:bg-mute"
              }`}
            />
          </button>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <ArrowButton direction="prev" onClick={onPrev} label={`Previous ${label}`} />
        <ArrowButton direction="next" onClick={onNext} label={`Next ${label}`} />
      </div>
    </div>
  );
}

function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-line text-ink transition-colors duration-300 hover:border-ink/50 hover:bg-raised"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        {direction === "prev" ? (
          <path d="M19 12H5m0 0l6-6m-6 6l6 6" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}
