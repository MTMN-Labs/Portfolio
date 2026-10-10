import Image from "next/image";
import type { Member } from "@/data/site";

// Monochrome portrait. Colour returns on hover where the parent sets `group`.
// Touch screens cannot hover, so `touchColor` shows the photo in colour there
// (used for whichever portrait is currently in focus), and a press also colours it.
export function Avatar({
  member,
  sizes,
  priority = false,
  touchColor = false,
  className = "",
}: {
  member: Member;
  sizes: string;
  priority?: boolean;
  touchColor?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative h-full w-full overflow-hidden bg-raised ${className}`}>
      <Image
        src={member.photo}
        alt={member.name}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectPosition: member.focus }}
        className={`object-cover grayscale contrast-[1.08] transition-[filter] duration-700 group-hover:grayscale-0 group-active:grayscale-0 ${
          touchColor ? "touch:grayscale-0" : ""
        }`}
      />
    </div>
  );
}
