import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { SiteLink } from "@/components/site-link";
import { site } from "@/content/site";

type Row = { label: string; value?: string; href?: string; link?: boolean };

const bare = (url: string) =>
  url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

export function Contact() {
  const { contact, links, about, availability } = site;
  const mail = links.email && `mailto:${links.email}`;
  const meta = (label: string) =>
    about.meta.find((m) => m.label === label)?.value;

  const reach: Row[] = [
    { label: "Email", value: contact.emailLabel, href: mail, link: true },
    {
      label: "GitHub",
      value: bare(links.github),
      href: links.github,
      link: true,
    },
    {
      label: "LinkedIn",
      value: bare(links.linkedin),
      href: links.linkedin,
      link: true,
    },
    { label: "Resume", value: "Download CV (PDF)", href: links.cv, link: true },
  ];
  const details: Row[] = [
    { label: "Location", value: meta("Location") },
    { label: "Timezone", value: contact.timezone },
    { label: "Available", value: meta("Available") },
    { label: "Languages", value: meta("Languages") },
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="bg-dark py-16 text-paper sm:py-24"
    >
      <div className="wrap grid gap-12 lg:grid-cols-[5fr_6fr] lg:items-start lg:gap-16">
        <Reveal className="on-dark min-w-0">
          <SectionHeading n={5} label="contact" id="contact-title" dark>
            {contact.title}
          </SectionHeading>
          <p className="mt-5 max-w-[40ch] text-on-dark">{contact.intro}</p>
          <SiteLink
            href={mail}
            variant="neutral"
            size="lg"
            className="mt-8 w-full bg-yellow shadow-[4px_4px_0_var(--color-paper)]! hover:shadow-none! sm:w-auto"
          >
            Email me
          </SiteLink>
          {availability.open && (
            <p className="mt-6 flex items-center gap-2 font-mono text-xs text-on-dark">
              <span
                aria-hidden
                className="size-2.5 shrink-0 rounded-full border border-paper bg-green"
              />
              {availability.text}
            </p>
          )}
        </Reveal>

        <Reveal delay={0.08} className="min-w-0">
          <dl className="rounded-lg border-[1.5px] border-ink bg-paper px-5 py-2 text-ink shadow-yellow sm:px-6">
            {[...reach, ...details].map((row, i) => (
              <div
                key={row.label}
                className={
                  "grid gap-1 border-ink/15 py-4 sm:grid-cols-[7rem_1fr] sm:gap-4 " +
                  (i < reach.length + details.length - 1 ? "border-b " : "") +
                  (i === reach.length ? "border-t-2 border-t-ink " : "")
                }
              >
                <dt className="font-mono text-xs uppercase tracking-wider text-ink-mute">
                  {row.label}
                </dt>
                <dd className="min-w-0 break-words font-bold">
                  {row.link ? (
                    <SiteLink href={row.href}>{row.value}</SiteLink>
                  ) : (
                    <span className="font-medium">{row.value}</span>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
