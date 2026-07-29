import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <p>Built with React &amp; Tailwind CSS.</p>
      </div>
    </footer>
  );
}
