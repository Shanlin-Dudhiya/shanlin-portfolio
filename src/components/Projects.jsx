import Section from "./Section";
import { projects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.name}
            className={`bento-tile p-6 sm:p-8 hover:-translate-y-1 hover:shadow-xl flex flex-col ${
              i === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-heading font-medium text-lg">{project.name}</h3>
              <div className="flex items-center gap-3 shrink-0">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-body hover:text-heading transition-colors whitespace-nowrap"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-body hover:text-heading transition-colors whitespace-nowrap"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-[var(--color-accent-2)] mb-4">{project.stack}</p>
            <ul className={`space-y-2 mt-auto ${i === 0 ? "sm:columns-2 sm:gap-6" : ""}`}>
              {project.points.map((point, j) => (
                <li key={j} className="text-body text-sm flex gap-2 break-inside-avoid">
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
