import { Reveal, Tilt } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { site } from "@/content/site";
import Image from 'next/image'

export function About() {
  const { about } = site;
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-16 sm:py-24"
    >
      <div className="wrap grid items-center gap-14 lg:grid-cols-[5fr_7fr]">
        <Tilt rotate={-3} className="relative mx-auto w-full max-w-sm">
          <figure className="border border-ink bg-white p-3 pb-4 shadow-[0_6px_16px_rgba(0,0,0,0.12)]">
            <div
              role="img"
              aria-label="Photo placeholder"
              className="grid aspect-square place-items-center bg-photo font-mono text-xs text-ink-soft"
            >
              <Image
                    src="https://drive.google.com/file/d/1dKXuZYZAaDQ3NASO946w1mlEYQ0X50h6/view?usp=sharing"
                    alt="Profile"
                    width={376}
                    height={376}
                  />
            </div>
            <figcaption className="pt-5 text-center font-mono text-xs">
              {site.name}, {site.city}
            </figcaption>
          </figure>
          <span
            aria-hidden
            className="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-yellow/80"
          />
        </Tilt>
        <Reveal>
          <SectionHeading n={1} label="about me" id="about-title">
            {about.title}
          </SectionHeading>
          <div className="mt-6 max-w-[56ch] space-y-4 text-ink-soft">
            {about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5">
            {about.meta.map((m) => (
              <div key={m.label}>
                <dt className="font-mono text-xs uppercase tracking-wider text-ink-mute">
                  {m.label}
                </dt>
                <dd className="mt-1 font-mono text-sm">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
