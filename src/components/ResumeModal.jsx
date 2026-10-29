import { useEffect } from "react";
import { profile, skills, experience, projects, education } from "../data";
import {
  FiDownload,
  FiX,
  FiExternalLink,
  FiMail,
  FiPhone,
  FiMapPin,
  FiPrinter,
} from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa6";

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-hidden rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
          <div className="flex items-center gap-2">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500" />
            <span className="text-sm font-semibold text-heading">
              Shanlin_Dudhiya_Resume.pdf
            </span>
            <span className="hidden sm:inline-block text-xs text-muted ml-2 px-2 py-0.5 rounded bg-[var(--color-bg)] border border-[var(--color-border)]">
              Updated 2026
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-xs font-medium text-subtle hover:text-heading hover:bg-[var(--color-surface-hover)] transition"
              title="Print Resume"
            >
              <FiPrinter size={14} />
              <span>Print</span>
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-[var(--color-accent)] hover:opacity-90 text-xs font-medium text-white transition shadow-sm"
            >
              <FiDownload size={14} />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-muted hover:text-heading rounded-lg hover:bg-[var(--color-surface-hover)] transition"
              aria-label="Close modal"
            >
              <FiX size={20} />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content: Styled High-Fidelity Resume Document */}
        <div className="overflow-y-auto px-6 sm:px-12 py-8 space-y-8 bg-[var(--color-surface)] text-[var(--color-body)]">
          {/* Header */}
          <div className="border-b border-[var(--color-border)] pb-6 text-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-heading tracking-tight">
              {profile.name}
            </h1>
            <p className="text-base sm:text-lg font-semibold text-[var(--color-accent-2)] mt-1">
              {profile.title}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-4 mt-3 text-xs sm:text-sm text-subtle">
              <span className="flex items-center gap-1.5">
                <FiPhone className="text-[var(--color-accent)]" /> {profile.phone}
              </span>
              <span>•</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-1.5 hover:text-heading underline decoration-[var(--color-accent)]/50"
              >
                <FiMail className="text-[var(--color-accent)]" /> {profile.email}
              </a>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <FiMapPin className="text-[var(--color-accent)]" /> {profile.location}
              </span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 mt-3 text-xs">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[var(--color-accent-2)] hover:underline"
              >
                <FaLinkedin /> LinkedIn <FiExternalLink size={11} />
              </a>
              <span>•</span>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-[var(--color-accent-2)] hover:underline"
              >
                <FaGithub /> GitHub <FiExternalLink size={11} />
              </a>
              <span>•</span>
              <a
                href="#top"
                onClick={onClose}
                className="inline-flex items-center gap-1 text-[var(--color-accent-2)] hover:underline"
              >
                Portfolio
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-heading border-b border-[var(--color-border)] pb-1 mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-body">
              {profile.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-heading border-b border-[var(--color-border)] pb-1 mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Technical Skills
            </h2>
            <div className="space-y-2 text-xs sm:text-sm">
              {skills.map((grp) => (
                <div key={grp.category} className="grid grid-cols-1 sm:grid-cols-4 gap-1">
                  <span className="font-semibold text-heading sm:col-span-1">
                    {grp.category}:
                  </span>
                  <span className="text-body sm:col-span-3">
                    {grp.items.map((it) => it.name).join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-heading border-b border-[var(--color-border)] pb-1 mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Work Experience
            </h2>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.company}>
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-bold text-sm sm:text-base text-heading">
                      {job.company}
                    </h3>
                    <span className="text-xs text-muted font-medium">{job.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs text-[var(--color-accent-2)] font-medium mb-2">
                    <span>{job.role}</span>
                    <span className="text-muted">{job.location}</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm">
                    {job.points.map((p, i) => (
                      <li key={i} className="flex gap-2 text-body">
                        <span className="text-[var(--color-accent)] font-bold">◦</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Projects */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-heading border-b border-[var(--color-border)] pb-1 mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Personal Projects
            </h2>
            <div className="space-y-5">
              {projects.map((proj) => (
                <div key={proj.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-bold text-sm sm:text-base text-heading">
                      {proj.name}
                    </h3>
                    <div className="flex items-center gap-3 text-xs">
                      {proj.demoLink && (
                        <a
                          href={proj.demoLink}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[var(--color-accent-2)] hover:underline inline-flex items-center gap-0.5"
                        >
                          Live Demo <FiExternalLink size={10} />
                        </a>
                      )}
                      {proj.link && (
                        <a
                          href={proj.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-subtle hover:text-heading inline-flex items-center gap-0.5"
                        >
                          GitHub <FiExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-xs italic text-[var(--color-accent-2)] mb-2">
                    {proj.stack}
                  </p>
                  <ul className="space-y-1 text-xs sm:text-sm">
                    {proj.points.map((pt, i) => (
                      <li key={i} className="flex gap-2 text-body">
                        <span className="text-[var(--color-accent)] font-bold">◦</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-heading border-b border-[var(--color-border)] pb-1 mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]" />
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.school}>
                  <div className="flex flex-wrap items-baseline justify-between gap-1">
                    <h3 className="font-bold text-sm text-heading">{edu.school}</h3>
                    <span className="text-xs text-muted">{edu.period}</span>
                  </div>
                  <div className="flex flex-wrap items-center justify-between text-xs text-body mt-0.5">
                    <span className="italic">{edu.degree} ({edu.grade})</span>
                    <span className="text-muted">{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] flex items-center justify-between text-xs text-muted">
          <span>Source: Shanlin Dudhiya • Full Stack Developer</span>
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-accent-2)] hover:underline inline-flex items-center gap-1"
          >
            Open raw PDF in new tab <FiExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
