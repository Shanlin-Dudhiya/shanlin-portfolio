import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 dot-grid" />
      <div
        className="blob blob-1 -top-32 left-1/4 h-[420px] w-[420px] opacity-25"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />
      <div
        className="blob blob-2 top-10 right-0 h-[380px] w-[380px] opacity-20"
        style={{ background: "radial-gradient(circle, var(--color-accent-2), transparent 70%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 relative">
        <p className="animate-fade-up text-sm font-medium text-[var(--color-accent-2)] tracking-wide uppercase">
          {profile.title}
        </p>
        <h1 className="animate-fade-up mt-4 text-5xl sm:text-7xl font-bold tracking-tight text-heading max-w-3xl">
          Hi, I'm <span className="gradient-text">{profile.name}</span>.
          <br />
          I build fast, scalable web apps.
        </h1>
        <p className="animate-fade-up mt-6 max-w-2xl text-lg text-body">
          {profile.summary}
        </p>
        <div className="animate-fade-up mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            Get in touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-subtle hover:border-[var(--color-border-hover)] transition"
          >
            View work
          </a>
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-subtle hover:border-[var(--color-border-hover)] transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Download Resume
          </a>
        </div>
        <p className="animate-fade-up mt-8 text-sm text-muted">{profile.location}</p>
      </div>
    </section>
  );
}
