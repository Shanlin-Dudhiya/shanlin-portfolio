import { profile } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-accent), transparent 70%)" }}
      />
      <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 relative">
        <p className="animate-fade-up text-sm font-medium text-[var(--color-accent-2)] tracking-wide uppercase">
          {profile.title}
        </p>
        <h1 className="animate-fade-up mt-4 text-4xl sm:text-6xl font-semibold tracking-tight text-heading max-w-3xl">
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
        </div>
        <p className="animate-fade-up mt-8 text-sm text-muted">{profile.location}</p>
      </div>
    </section>
  );
}
