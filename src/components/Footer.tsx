import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-mute md:flex-row md:items-center md:justify-between md:px-10">
        <div className="font-display text-sm font-bold text-ink">
          {site.short}
          <span className="text-mute">.</span>LABS
        </div>
        <div>
          {new Date().getFullYear()} {site.name}. {site.location}.
        </div>
      </div>
    </footer>
  );
}
