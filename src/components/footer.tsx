import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-dark text-on-dark">
      <div className="wrap flex flex-col gap-2 border-t border-white/10 py-6 font-mono text-xs sm:flex-row sm:justify-between">
        <p>{site.footer.left}</p>
        <p>{site.footer.right}</p>
      </div>
    </footer>
  );
}
