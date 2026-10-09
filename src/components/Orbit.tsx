"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion } from "framer-motion";
import { team } from "@/data/site";
import { Avatar } from "./Avatar";

// How long each member holds the centre before the orbit rotates.
const PERIOD_MS = 3000;

// Slot 0 is the centre. Members rotate through the slots in team order,
// so every PERIOD_MS the next member moves into the middle and the
// previous centre slides out to a satellite position.
const SLOTS = [
  { x: 50, y: 50, size: 44 },
  { x: 19, y: 30, size: 24 },
  { x: 82, y: 19, size: 24 },
  { x: 79, y: 80, size: 24 },
];

// Deterministic star field so the server and client render the same dots.
const STARS = Array.from({ length: 36 }, (_, i) => ({
  x: (i * 37 + 11) % 100,
  y: (i * 53 + 7) % 100,
  r: 0.25 + ((i * 7) % 3) * 0.12,
}));

export function Orbit() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);
  const elapsedRef = useRef(0);
  const progress = useMotionValue(0);
  const reduce = useReducedMotion();

  pausedRef.current = paused;

  useEffect(() => {
    if (reduce) return;
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      if (!pausedRef.current) {
        elapsedRef.current += dt;
        if (elapsedRef.current >= PERIOD_MS) {
          elapsedRef.current = 0;
          setActive((a) => (a + 1) % team.length);
        }
        progress.set(elapsedRef.current / PERIOD_MS);
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [progress, reduce]);

  const pick = (i: number) => {
    elapsedRef.current = 0;
    progress.set(0);
    setActive(i);
  };

  const spring = { type: "spring" as const, stiffness: 70, damping: 18, mass: 0.9 };

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[560px] select-none sm:max-w-[640px] lg:max-w-[720px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="MTMN Labs team orbit"
    >
      {/* stars and connecting lines */}
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
        {STARS.map((s, i) => (
          <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#f2f2f2" fillOpacity="0.35" />
        ))}
        {SLOTS.slice(1).map((s, i) => (
          <line
            key={i}
            x1="50"
            y1="50"
            x2={s.x}
            y2={s.y}
            stroke="#e6e6e6"
            strokeOpacity="0.35"
            strokeWidth="0.25"
          />
        ))}
        <line x1={SLOTS[1].x} y1={SLOTS[1].y} x2={SLOTS[2].x} y2={SLOTS[2].y} stroke="#f2f2f2" strokeOpacity="0.1" strokeWidth="0.2" />
        <line x1={SLOTS[2].x} y1={SLOTS[2].y} x2={SLOTS[3].x} y2={SLOTS[3].y} stroke="#f2f2f2" strokeOpacity="0.1" strokeWidth="0.2" />
      </svg>

      {/* rotating rings */}
      <div className="spin-slow absolute inset-[8%] rounded-full border border-dashed border-ink/15" />
      <div className="spin-slower absolute inset-[22%] rounded-full border border-ink/10" />
      <div className="absolute inset-[22%] rounded-full">
        <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" />
      </div>

      {/* countdown ring around the centre slot */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full -rotate-90"
        aria-hidden
      >
        <motion.circle
          cx="50"
          cy="50"
          r={SLOTS[0].size / 2 + 1.6}
          fill="none"
          stroke="#e6e6e6"
          strokeWidth="0.4"
          strokeLinecap="round"
          style={{ pathLength: progress }}
        />
      </svg>

      {/* members, one per slot */}
      {team.map((m, i) => {
        const slot = SLOTS[(i - active + team.length) % team.length];
        const isCentre = slot === SLOTS[0];
        return (
          <motion.button
            key={m.slug}
            type="button"
            layout
            transition={spring}
            onClick={() => pick(i)}
            aria-label={`Show ${m.first}`}
            className="group absolute cursor-pointer"
            style={{
              left: `${slot.x - slot.size / 2}%`,
              top: `${slot.y - slot.size / 2}%`,
              width: `${slot.size}%`,
              height: `${slot.size}%`,
              zIndex: isCentre ? 3 : 2,
            }}
          >
            <motion.div
              layout
              transition={spring}
              className={`h-full w-full overflow-hidden rounded-full border bg-bg shadow-[0_0_0_6px_#050505] ${
                isCentre ? "border-accent" : "border-ink/40 group-hover:border-accent"
              }`}
            >
              <Avatar member={m} sizes="(min-width: 1024px) 320px, 45vw" priority={i === 0} />
            </motion.div>

            <motion.div
              layout="position"
              transition={spring}
              className={`pointer-events-none absolute left-1/2 top-full w-60 -translate-x-1/2 pt-3 text-center ${
                isCentre ? "" : "opacity-80"
              }`}
            >
              <div className={`font-display font-semibold ${isCentre ? "text-base md:text-lg" : "text-xs md:text-sm"}`}>
                {isCentre ? m.name.split(" ").slice(-2).join(" ") : m.first}
              </div>
              {isCentre ? (
                <div className="mt-0.5 text-[11px] text-mute md:text-xs">{m.role}</div>
              ) : null}
            </motion.div>
          </motion.button>
        );
      })}

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.3em] text-mute">
        {paused ? "paused" : "rotating"} · {team[active].first} in focus
      </div>
    </div>
  );
}
