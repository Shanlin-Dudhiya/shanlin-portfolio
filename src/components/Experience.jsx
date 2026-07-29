import Section from "./Section";
import { experience } from "../data";

export default function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked">
      <div className="space-y-8">
        {experience.map((job) => (
          <div
            key={job.company}
            className="bento-tile p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <h3 className="text-heading font-medium text-lg">{job.role}</h3>
              <span className="text-sm text-muted">{job.period}</span>
            </div>
            <p className="text-sm text-[var(--color-accent-2)] mb-4">
              {job.company} · {job.location}
            </p>
            <ul className="space-y-2">
              {job.points.map((point, i) => (
                <li key={i} className="text-body text-sm flex gap-2">
                  <span className="text-[var(--color-accent)] mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
