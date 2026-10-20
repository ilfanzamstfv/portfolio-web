import type { VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  variant?: VariantProps<typeof buttonVariants>["variant"] | "text";
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  children: ReactNode;
};

// An empty href renders inert text, never a dead link.
export function SiteLink({
  href,
  variant = "text",
  size,
  className,
  children,
}: Props) {
  const base =
    variant === "text"
      ? "underline underline-offset-4 decoration-1 hover:decoration-2"
      : buttonVariants({ variant, size });

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={cn(
          base,
          "pointer-events-none opacity-60",
          variant === "text" && "no-underline",
          className,
        )}
      >
        {children}
      </span>
    );
  }

  const external = href.startsWith("http");
  return (
    <a
      href={href}
      className={cn(base, className)}
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
      {external && <span className="sr-only"> (opens in new tab)</span>}
    </a>
  );
}
