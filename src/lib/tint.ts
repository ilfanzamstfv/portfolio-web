export const tint = {
  blue: "bg-tint-blue",
  yellow: "bg-tint-yellow",
  green: "bg-tint-green",
  pink: "bg-tint-pink",
} as const;

export type Tint = keyof typeof tint;
