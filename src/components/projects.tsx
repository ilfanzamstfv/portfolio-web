import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { SiteLink } from "@/components/site-link";
import { Badge } from "@/components/ui/badge";
import { site } from "@/content/site";
import { tint, type Tint } from "@/lib/tint";
import { cn } from "@/lib/utils";

function Shot({
  label,
  color,
  className,
}: {
  label: string;
  color: Tint;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={cn(
        "grid place-items-center font-mono text-xs text-ink-soft",
        tint[color],
        className,
      )}
    >
      {label}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <li key={t}>
          <Badge variant="tag">{t}</Badge>
        </li>
      ))}
    </ul>
  );
}

function Featured() {
  const p = site.projects.featured;
  return (
    <article className="grid gap-6 rounded-lg border-[1.5px] border-ink bg-white p-5 shadow-yellow lg:grid-cols-2 lg:p-6">
      <div className="overflow-hidden rounded-md border-[1.5px] border-ink">
        <div
          aria-hidden
          className="flex gap-1.5 border-b border-ink bg-white px-3 py-2"
        >
          {[0, 1, 2].map((i) => (
            <span key={i} className="size-2 rounded-full bg-ink" />
          ))}
        </div>
        <Shot label={p.shot} color="blue" className="aspect-[16/10]" />
      </div>
      <div className="flex flex-col">
        <p className="font-mono text-xs uppercase tracking-wider text-main">
          {p.label}
        </p>
        <h3 className="mt-2 text-xl">{p.title}</h3>
        <p className="mt-3 text-ink-soft">{p.description}</p>
        <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-ink-soft">
          {p.points.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <div className="mt-4">
          <Tags tags={p.tags} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <SiteLink variant="default" href={p.demo}>
            Live demo ↗
          </SiteLink>
          <SiteLink variant="neutral" href={p.source}>
            Source code
          </SiteLink>
        </div>
      </div>
    </article>
  );
}

function Card({ p }: { p: (typeof site.projects.others)[number] }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-ink bg-white p-4 shadow-offset transition-transform hover:-translate-y-0.5">
      <Shot
        label={p.shot}
        color={p.tint}
        className="aspect-[16/9] rounded-md border border-ink"
      />
      <h3 className="mt-4 text-lg">{p.title}</h3>
      <p className="mt-1 text-sm text-ink-soft">{p.description}</p>
      <div className="mt-3">
        <Tags tags={p.tags} />
      </div>
      <p className="mt-auto flex gap-4 pt-5 font-mono text-xs">
        <SiteLink href={p.demo}>Live demo ↗</SiteLink>
        <SiteLink href={p.source}>Source</SiteLink>
      </p>
    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="py-16 sm:py-24"
    >
      <div className="wrap">
        <SectionHeading n={3} label="projects" id="projects-title">
          {site.projects.title}
        </SectionHeading>
        <div className="mt-10 space-y-6">
          <Reveal>
            <Featured />
          </Reveal>
          <ul className="grid gap-6 md:grid-cols-2">
            {site.projects.others.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.06} className="h-full">
                  <Card p={p} />
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
