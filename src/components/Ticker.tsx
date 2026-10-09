import { site } from "@/data/site";

export function Ticker() {
  const items = [...site.stack, ...site.stack];
  return (
    <div className="border-y border-line py-5">
      <div className="flex w-max gap-12 whitespace-nowrap ticker">
        {items.map((s, i) => (
          <span key={i} className="flex items-center gap-12 font-mono text-xs uppercase tracking-[0.3em] text-mute">
            {s}
            <span className="h-1 w-1 rounded-full bg-ink/30" />
          </span>
        ))}
      </div>
    </div>
  );
}
