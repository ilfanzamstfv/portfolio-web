import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { SiteLink } from "@/components/site-link";
import { site } from "@/content/site";

export function Experience() {
  const { experience } = site;
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="bg-white py-16 sm:py-24"
    >
      <div className="wrap">
        <SectionHeading n={4} label="experience" id="experience-title">
          {experience.title}
        </SectionHeading>
        <ol className="mt-10 border-t-2 border-ink">
          {experience.rows.map((r) => (
            <li key={r.title} className="border-b border-line py-6">
              <Reveal className="grid gap-2 md:grid-cols-[1fr_2fr] md:gap-8">
                <p className="font-mono text-xs text-ink-mute">{r.period}</p>
                <div>
                  <h3 className="text-lg">{r.title}</h3>
                  {r.points.length > 1 ? (
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink-soft">
                      {r.points.map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-3 text-sm text-ink-soft">{r.points[0]}</p>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
        <SiteLink variant="neutral" href={site.links.cv} className="mt-8">
          Download full CV (PDF)
        </SiteLink>
      </div>
    </section>
  );
}
