import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/15 bg-background">
      <div className="wrap flex h-14 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 font-bold">
          <span
            aria-hidden
            className="size-3 rounded-full border border-ink bg-yellow"
          />
          {site.name}
        </a>
        <nav aria-label="Primary" className="flex items-center gap-6">
          <ul className="hidden gap-6 font-mono text-xs sm:flex">
            {site.nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:underline underline-offset-4">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className={buttonVariants({ variant: "dark", size: "sm" })}
          >
            Hire me
          </a>
        </nav>
      </div>
    </header>
  );
}
