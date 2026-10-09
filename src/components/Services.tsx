import { services, process } from "@/data/site";
import { Reveal, SectionHeading } from "./ui";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading
        index="01"
        title="What we build"
        text="Six things we do well. Each one has shipped to real users, not just a demo."
      />

      <ul className="border-t border-line">
        {services.map((s, i) => (
          <Reveal key={s.index} delay={i * 0.05}>
            <li className="group grid gap-4 border-b border-line py-8 transition-colors duration-500 hover:bg-surface md:grid-cols-[80px_1fr_1.3fr_auto] md:items-start md:gap-8 md:px-4">
              <span className="font-mono text-sm text-mute transition-colors group-hover:text-accent">{s.index}</span>
              <h3 className="font-display text-2xl font-semibold leading-tight">{s.title}</h3>
              <p className="text-base leading-relaxed text-mute">{s.text}</p>
              <div className="flex flex-wrap gap-2 md:max-w-[180px] md:justify-end">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-mute">
                    {t}
                  </span>
                ))}
              </div>
            </li>
          </Reveal>
        ))}
      </ul>

      <div className="mt-28 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-mute">How we work</div>
          <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
            Short calls, written scope, weekly demos.
          </h3>
          <p className="mt-5 max-w-md leading-relaxed text-mute">
            You always know what is being built, what it costs and when it lands. No surprises at the end.
          </p>
        </Reveal>
        <ol className="border-t border-line">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <li className="grid grid-cols-[60px_1fr] gap-6 border-b border-line py-6 md:grid-cols-[60px_160px_1fr]">
                <span className="font-mono text-sm text-accent">{p.step}</span>
                <span className="font-display text-lg font-semibold">{p.title}</span>
                <span className="col-span-2 text-mute md:col-span-1">{p.text}</span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
