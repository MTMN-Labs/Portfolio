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
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div custom={0} variants={rise} initial="hidden" animate="show"
            className="mb-6 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.tagline}
          </motion.div>

          <motion.h1 custom={1} variants={rise} initial="hidden" animate="show"
            className="font-display text-5xl font-extrabold leading-[1.02] tracking-tight md:text-7xl">
            Four engineers.
            <br />
            One connected
            <br />
            team.
          </motion.h1>

          <motion.p custom={2} variants={rise} initial="hidden" animate="show"
            className="mt-7 max-w-lg text-lg leading-relaxed text-mute">
            {site.description}
          </motion.p>

          <motion.div custom={3} variants={rise} initial="hidden" animate="show" className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact">Contact us for services</Button>
            <Button href="#team" variant="ghost">
              Meet the team
            </Button>
          </motion.div>

          <motion.dl custom={4} variants={rise} initial="hidden" animate="show"
            className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {site.stats.map((s) => (
              <div key={s.label} className="border-l border-accent/70 pl-4">
                <dt className="font-display text-3xl font-bold">{s.value}</dt>
                <dd className="mt-1 text-xs text-mute">{s.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="pb-12"
        >
          <Orbit />
        </motion.div>
      </div>
    </section>
  );
}
