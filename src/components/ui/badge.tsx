"use client";

import { mergeProps } from "@base-ui/react/merge-props";
import { useRender } from "@base-ui/react/use-render";
import { cva, type VariantProps } from "class-variance-authority";


import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-sm px-2 py-0.5 font-mono text-xs w-fit whitespace-nowrap shrink-0",
  {
    variants: {
      variant: {
        // Skill chip: white, bordered.
        neutral: "bg-secondary-background text-foreground border border-border",
        // Project tag: tinted, no border.
        tag: "bg-tint-blue text-main",
        // Status pill on the page background.
        status: "bg-background text-foreground border border-border",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  },
);

function Badge({
  className,
  variant,
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    render,
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props,
    ),
    state: {
      slot: "badge",
      variant: variant ?? "neutral",
    },
  });
}

export { Badge, badgeVariants };
