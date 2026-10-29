import { useState } from "react";
import Section from "./Section";
import { projects } from "../data";
import {
  FiExternalLink,
  FiGithub,
  FiArrowUpRight,
} from "react-icons/fi";
import { TbBrain } from "react-icons/tb";

export default function Projects({ onOpenRAGArchitecture }) {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI & Full Stack", "Full Stack & Utilities", "Frontend & E-Commerce"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <Section
      id="projects"
      eyebrow="Portfolio Projects"
      title="Featured Engineering Work"
    >
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <p className="text-xs sm:text-sm text-body">
          Hands-on full-stack and AI applications from Shanlin's resume
        </p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-xs px-3.5 py-1.5 rounded-full transition font-medium cursor-pointer ${
                filter === cat
                  ? "bg-[var(--color-accent)] text-white shadow-xs"
                  : "bg-[var(--color-surface)] border border-[var(--color-border)] text-subtle hover:text-heading hover:border-[var(--color-border-hover)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredProjects.map((project) => {
          const isAIProject = project.id === "chat-with-a-website";

          return (
            <div
              key={project.id}
              className={`bento-tile p-6 sm:p-8 flex flex-col justify-between group hover:border-[var(--color-accent)]/50 transition-all ${
                isAIProject ? "lg:col-span-2 accent" : ""
              }`}
            >
              <div>
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-2)] bg-[var(--color-bg)] border border-[var(--color-border)] px-2.5 py-1 rounded-full">
                      {project.badge || project.category}
                    </span>
                    {project.metrics && (
                      <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-2">
                    {project.demoLink && (
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-accent)] hover:opacity-90 text-white text-xs font-medium transition shadow-xs"
                      >
                        <span>Live Demo</span>
                        <FiExternalLink size={12} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-subtle hover:text-heading text-xs font-medium transition"
                        title="GitHub Repository"
                      >
                        <FiGithub size={13} />
                        <span>Source</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Title & Stack */}
                <h3 className="text-xl sm:text-2xl font-bold text-heading group-hover:text-[var(--color-accent-2)] transition mb-1">
                  {project.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-[var(--color-accent-2)] mb-4">
                  {project.stack}
                </p>

                {/* AI Architecture Step Strip (if AI project) */}
                {isAIProject && project.flow && (
                  <div className="my-5 p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-heading flex items-center gap-1.5">
                        <TbBrain className="text-[var(--color-accent)]" size={15} />
                        RAG Data Flow
                      </span>
                      <button
                        onClick={onOpenRAGArchitecture}
                        className="text-xs text-[var(--color-accent-2)] hover:underline inline-flex items-center gap-1 cursor-pointer font-medium"
                      >
                        Detailed Blueprint <FiArrowUpRight size={12} />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-4 gap-2">
                      {project.flow.map((fl) => (
                        <div
                          key={fl.step}
                          className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs"
                        >
                          <span className="font-bold text-heading block mb-0.5">
                            {fl.step}
                          </span>
                          <span className="text-[11px] text-muted block leading-snug">
                            {fl.desc}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bullet Points from Resume */}
                <ul className="space-y-2.5 my-4">
                  {project.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-body leading-relaxed">
                      <span className="text-[var(--color-accent)] mt-0.5 font-bold shrink-0">▹</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Tags */}
              {project.tags && (
                <div className="pt-4 border-t border-[var(--color-border)] flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2.5 py-0.5 rounded-md bg-[var(--color-bg)] text-muted font-mono"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
