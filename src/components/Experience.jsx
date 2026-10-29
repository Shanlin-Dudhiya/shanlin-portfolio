import Section from "./Section";
import { experience } from "../data";
import { FiCalendar, FiMapPin, FiZap } from "react-icons/fi";

export default function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Career Timeline"
      title="Work Experience"
    >
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[var(--color-border)] space-y-10">
        {experience.map((job) => (
          <div key={job.company} className="relative group">
            {/* Glowing Timeline Node Dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[var(--color-surface)] border-2 border-[var(--color-accent)] group-hover:scale-110 transition shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)]" />
            </div>

            {/* Experience Bento Card */}
            <div className="bento-tile p-6 sm:p-8 hover:border-[var(--color-accent)]/50 transition">
              {/* Top Row: Role, Duration, Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl sm:text-2xl font-bold text-heading">
                      {job.role}
                    </h3>
                    {job.status && (
                      <span className="text-[11px] font-semibold text-[var(--color-accent-2)] bg-[var(--color-bg)] border border-[var(--color-border)] px-2.5 py-0.5 rounded-full">
                        {job.status}
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-[var(--color-accent)] mt-0.5">
                    {job.company}
                  </p>
                </div>

                {/* Duration & Location Badges */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs text-muted">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-subtle font-medium">
                    <FiCalendar size={13} className="text-[var(--color-accent)]" />
                    {job.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-muted font-medium">
                    <FiMapPin size={13} />
                    {job.location}
                  </span>
                </div>
              </div>

              {/* Highlight Metrics Badges */}
              {job.highlights && (
                <div className="flex flex-wrap gap-1.5 my-4">
                  {job.highlights.map((h) => (
                    <span
                      key={h}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-950/30 border border-emerald-800/40 px-2.5 py-0.5 rounded-md"
                    >
                      <FiZap size={11} /> {h}
                    </span>
                  ))}
                </div>
              )}

              {/* Bullet Points from Resume */}
              <ul className="space-y-2.5 my-4">
                {job.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-body leading-relaxed"
                  >
                    <span className="text-[var(--color-accent)] mt-0.5 font-bold shrink-0">
                      ▹
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Technologies Used Strip */}
              {job.technologies && (
                <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap items-center gap-1.5">
                  <span className="text-[11px] font-semibold text-muted mr-1">Stack:</span>
                  {job.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2.5 py-0.5 rounded bg-[var(--color-bg)] border border-[var(--color-border)] text-subtle font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
