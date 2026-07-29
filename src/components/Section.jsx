export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`max-w-6xl mx-auto px-6 py-20 sm:py-24 ${className}`}>
      {eyebrow && (
        <p className="text-sm font-medium text-[var(--color-accent-2)] tracking-wide uppercase mb-3">
          {eyebrow}
        </p>
      )}
      {title && <h2 className="section-heading mb-10">{title}</h2>}
      {children}
    </section>
  );
}
