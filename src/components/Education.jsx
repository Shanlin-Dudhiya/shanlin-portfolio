import Section from "./Section";
import { education } from "../data";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import { FaGraduationCap } from "react-icons/fa6";

export default function Education() {
  return (
    <Section
      id="education"
      eyebrow="Credentials"
      title="Academic Background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div
            key={edu.school}
            className="bento-tile p-6 sm:p-8 flex flex-col justify-between hover:border-[var(--color-accent)]/50 transition group"
          >
            <div>
              {/* Header Icon & Degree Level */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="p-3 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-accent)] group-hover:scale-105 transition">
                  <FaGraduationCap size={22} />
                </div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                  {edu.grade}
                </span>
              </div>

              {/* School and Degree */}
              <h3 className="text-lg sm:text-xl font-bold text-heading mb-1 group-hover:text-[var(--color-accent-2)] transition">
                {edu.school}
              </h3>
              <p className="text-sm font-medium text-[var(--color-accent)] mb-3">
                {edu.degree}
              </p>

              {/* Highlights */}
              {edu.highlights && (
                <div className="flex flex-wrap gap-1.5 my-4">
                  {edu.highlights.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--color-bg)] border border-[var(--color-border)] text-subtle font-mono"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom Meta */}
            <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-muted mt-auto">
              <span className="flex items-center gap-1.5">
                <FiMapPin size={13} />
                {edu.location}
              </span>
              <span className="flex items-center gap-1.5 font-medium text-subtle">
                <FiCalendar size={13} className="text-[var(--color-accent)]" />
                {edu.period}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
