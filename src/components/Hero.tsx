"use client";

import { motion } from "framer-motion";
import { site } from "@/data/site";
import { Button } from "./ui";
import { Orbit } from "./Orbit";

const rise = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-16 md:pt-24 md:pb-12"
    >
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <motion.div custom={0} variants={rise} initial="hidden" animate="show"
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.tagline}
          </motion.div>

          <motion.h1 custom={1} variants={rise} initial="hidden" animate="show"
            className="font-display text-[clamp(2.5rem,4.6vw,4rem)] font-extrabold leading-[1.02] tracking-tight">
            Four engineers.
            <br />
            One connected
            <br />
            team.
          </motion.h1>

          <motion.p custom={2} variants={rise} initial="hidden" animate="show"
            className="mt-6 max-w-lg text-base leading-relaxed text-mute md:text-lg">
            {site.description}
          </motion.p>

          <motion.div custom={3} variants={rise} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-3">
            <Button href="#contact">Contact us for services</Button>
            <Button href="#team" variant="ghost">
              Meet the team
            </Button>
          </motion.div>

          <motion.dl custom={4} variants={rise} initial="hidden" animate="show"
            className="mt-12 grid grid-cols-3 gap-x-8 gap-y-6">
            {site.stats.map((s) => (
              <div key={s.label} className="border-l border-accent/70 pl-4">
                <dt className="font-display text-2xl font-bold md:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-mute">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full pb-12 lg:pb-8"
        >
          <Orbit />
        </motion.div>
      </div>
    </section>
  );
}
