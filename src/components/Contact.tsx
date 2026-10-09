"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { site, team } from "@/data/site";
import { Reveal, SectionHeading } from "./ui";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  // There is no backend yet, so the form opens the visitor's mail client
  // with everything filled in.
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${form.name || "your website"}`);
    const body = encodeURIComponent(`${form.message}\n\n${form.name}\n${form.email}`);
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-md border border-line bg-bg px-4 py-3 text-ink outline-none transition-colors placeholder:text-mute/60 focus:border-accent";

  return (
    <section id="contact" className="border-t border-line bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-28 md:px-10">
        <SectionHeading index="04" title="Contact us" text="Tell us what you are building. We reply within a working day." />

        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h3 className="font-display text-4xl font-bold leading-tight md:text-5xl">
              Have a project?
              <br />
              Let us talk.
            </h3>
            <a
              href={`mailto:${site.email}`}
              className="group mt-8 inline-flex items-center gap-3 font-display text-xl font-semibold text-accent md:text-2xl"
            >
              {site.email}
              <ArrowUpRight className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <p className="mt-3 text-mute">{site.location}</p>

            <ul className="mt-12 border-t border-line">
              {team.map((m) => (
                <li key={m.slug} className="grid gap-2 border-b border-line py-4 sm:grid-cols-[1fr_auto] sm:items-center">
                  <div>
                    <div className="font-semibold">{m.first}</div>
                    <div className="text-xs text-mute">{m.role}</div>
                  </div>
                  <div className="flex gap-4 text-mute">
                    <a href={m.linkedin} target="_blank" rel="noreferrer" aria-label={`${m.first} on LinkedIn`} className="hover:text-ink">
                      <Linkedin size={18} />
                    </a>
                    <a href={m.github} target="_blank" rel="noreferrer" aria-label={`${m.first} on GitHub`} className="hover:text-ink">
                      <Github size={18} />
                    </a>
                    <a href={`mailto:${m.email}`} aria-label={`Email ${m.first}`} className="hover:text-ink">
                      <Mail size={18} />
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={submit} className="flex flex-col gap-4">
              <label className="text-sm text-mute">
                Name
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={`${field} mt-2`}
                  placeholder="Your name"
                />
              </label>
              <label className="text-sm text-mute">
                Email
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={`${field} mt-2`}
                  placeholder="you@company.com"
                />
              </label>
              <label className="text-sm text-mute">
                What are you building?
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} mt-2 resize-y`}
                  placeholder="A few lines about the product, the timeline and the budget range if you have one."
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex cursor-pointer items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-white"
              >
                Send enquiry
              </button>
              <p className="text-xs text-mute">Opens your email client with the message filled in.</p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
