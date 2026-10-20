import { Highlight, Tilt } from "@/components/motion";
import { SiteLink } from "@/components/site-link";
import { Badge } from "@/components/ui/badge";
import { site } from "@/content/site";

const Str = ({ children }: { children: string }) => (
  <span className="text-code-str">{`"${children}"`}</span>
);

const List = ({ items }: { items: string[] }) => (
  <>
    {items.map((s, i) => (
      <span key={s}>
        {i > 0 && ", "}
        <Str>{s}</Str>
      </span>
    ))}
  </>
);

function CodeWindow() {
  const { stack, cares } = site.hero.code;
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg bg-ink shadow-yellow">
        <div
          className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5"
          aria-hidden
        >
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-xs text-dim">dev.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-xs leading-[1.7] text-on-dark sm:text-[13px]">
          <code>
            <span className="text-dim">{"// who I am, in code"}</span>
            {"\n"}
            <span className="text-yellow">const</span>
            {" dev = {\n  name: "}
            <Str>{site.name}</Str>
            {",\n  role: "}
            <Str>{site.role}</Str>
            {",\n  stack: ["}
            <List items={stack} />
            {"],\n  cares: ["}
            <List items={cares} />
            {`],\n  openToWork: ${site.availability.open},\n};`}
          </code>
        </pre>
      </div>
      <Tilt
        rotate={4}
        className="absolute -top-4 right-4 rounded-sm border border-ink bg-sticker-mint px-2.5 py-1 font-mono text-xs"
      >
        {site.hero.stickers.top}
      </Tilt>
      <Tilt
        rotate={-3}
        className="absolute -bottom-4 left-4 rounded-sm border border-ink bg-sticker-pink px-2.5 py-1 font-mono text-xs"
      >
        {site.hero.stickers.bottom}
      </Tilt>
    </div>
  );
}

export function Hero() {
  const { links } = site;
  return (
    <section className="bg-ruled border-b border-ink/15">
      <div className="wrap grid items-center gap-14 py-12 lg:grid-cols-2 lg:py-20">
        <div>
          {site.availability.open && (
            <Badge variant="status" className="gap-2 rounded-full px-3 py-1">
              <span aria-hidden className="size-1.5 rounded-full bg-green" />
              {site.availability.text}
            </Badge>
          )}
          <h1 className="mt-6 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.05] tracking-tight">
            {site.hero.headline.map((part, i) =>
              typeof part === "string" ? (
                part
              ) : (
                <Highlight key={i}>{part.mark}</Highlight>
              ),
            )}
          </h1>
          <p className="mt-6 max-w-[46ch] text-ink-soft">{site.hero.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <SiteLink
              variant="default"
              href="#projects"
              className="w-full sm:w-auto"
            >
              View projects
            </SiteLink>
            <SiteLink
              variant="neutral"
              href={links.cv}
              className="w-full sm:w-auto"
            >
              Download CV
            </SiteLink>
          </div>
          <ul className="mt-8 flex gap-5 font-mono text-xs">
            <li>
              <SiteLink href={links.github}>github</SiteLink>
            </li>
            <li>
              <SiteLink href={links.linkedin}>linkedin</SiteLink>
            </li>
            <li>
              <SiteLink href={links.email && `mailto:${links.email}`}>
                email
              </SiteLink>
            </li>
          </ul>
        </div>
        <CodeWindow />
      </div>
    </section>
  );
}
