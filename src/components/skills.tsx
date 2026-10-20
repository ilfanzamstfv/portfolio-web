import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { site } from "@/content/site";
import { tint } from "@/lib/tint";
import { cn } from "@/lib/utils";

export function Skills() {
  const { skills } = site;
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="bg-white py-16 sm:py-24"
    >
      <div className="wrap">
        <SectionHeading n={2} label="skills" id="skills-title">
          {skills.title}
        </SectionHeading>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.groups.map((g, i) => (
            <li key={g.name}>
              <Reveal delay={i * 0.06} className="h-full">
                <div
                  className={cn(
                    "h-full rounded-md border border-ink p-4 transition-transform hover:-translate-y-0.5",
                    tint[g.tint],
                  )}
                >
                  <h3 className="text-sm">{g.name}</h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {g.items.map((s) => (
                      <li key={s}>
                        <Badge>{s}</Badge>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-xs text-ink-mute">
          {skills.learning}
        </p>
      </div>
    </section>
  );
}
