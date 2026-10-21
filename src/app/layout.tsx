import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { Loader } from "@/components/loader";
import { MotionProvider } from "@/components/motion";
import { site } from "@/content/site";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const title = `${site.name} — ${site.role}`;
const description =
  "Frontend developer who ships fast, accessible interfaces with React and TypeScript.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body id="top" className="flex min-h-full flex-col font-sans">
        {/* Without JS the loader would never leave. */}
        <noscript>
          <style>{"#loader{display:none}html{overflow:auto!important}"}</style>
        </noscript>
        <MotionProvider>
          <Loader />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
