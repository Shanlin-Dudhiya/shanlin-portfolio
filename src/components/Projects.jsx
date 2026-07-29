import Section from "./Section";
import { projects } from "../data";

export default function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <div className="grid sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className="card p-6 sm:p-8 hover:border-zinc-600 transition-colors flex flex-col"
          >
            <div className="flex items-center justify-between gap-2 mb-1">
              <h3 className="text-white font-medium text-lg">{project.name}</h3>
              <div className="flex items-center gap-3 shrink-0">
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-zinc-400 hover:text-white transition-colors whitespace-nowrap"
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm text-[var(--color-accent-2)] mb-4">{project.stack}</p>
            <ul className="space-y-2 mt-auto">
              {project.points.map((point, i) => (
                <li key={i} className="text-zinc-400 text-sm flex gap-2">
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
