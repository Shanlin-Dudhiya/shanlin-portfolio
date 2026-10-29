import { useState } from "react";
import { profile } from "../data";
import InteractiveTerminal from "./InteractiveTerminal";
import {
  FiDownload,
  FiFileText,
  FiArrowRight,
  FiMail,
  FiCheckCircle,
} from "react-icons/fi";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa6";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiGooglegemini,
  SiLinux,
} from "react-icons/si";

export default function Hero({ onOpenResume }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const techBadges = [
    { name: "React.js", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-emerald-400" },
    { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Google Gemini", icon: SiGooglegemini, color: "text-violet-400" },
    { name: "Linux Server", icon: SiLinux, color: "text-yellow-400" },
  ];

  return (
    <section id="top" className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Background Decor */}
      <div className="absolute inset-0 dot-grid opacity-70" />
      <div
        className="blob blob-1 -top-32 left-1/4 h-[440px] w-[440px] opacity-25"
        style={{
          background: "radial-gradient(circle, var(--color-accent), transparent 70%)",
        }}
      />
      <div
        className="blob blob-2 top-20 right-0 h-[400px] w-[400px] opacity-20"
        style={{
          background: "radial-gradient(circle, var(--color-accent-2), transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Bio & Core Pitch */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-heading tracking-wide">
                Available for Full-time Roles & Contracts
              </span>
            </div>

            {/* Headline */}
            <div>
              <p className="text-sm font-semibold tracking-wider uppercase text-[var(--color-accent-2)] mb-2">
                {profile.title} &middot; Ahmedabad, India
              </p>
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-heading leading-[1.12]">
                Hi, I'm <span className="gradient-text">{profile.name}</span>.
                <br />
                I build fast, scalable web apps & AI systems.
              </h1>
            </div>

            {/* Resume Summary Pitch */}
            <p className="text-base sm:text-lg text-body leading-relaxed max-w-xl">
              MERN Stack engineer with proven experience designing RESTful APIs,
              optimizing SQL queries by <strong className="text-heading font-semibold">20%</strong>,
              and deploying full-stack web applications on production Linux servers. Recently
              extended into <strong className="text-heading font-semibold">RAG architectures</strong> with
              vector search & LLMs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--color-accent-hover)] transition shadow-md shadow-violet-500/20"
              >
                <span>View Projects</span>
                <FiArrowRight size={16} />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] px-5 py-3 text-sm font-medium text-heading transition hover:bg-[var(--color-surface-hover)] shadow-xs cursor-pointer"
              >
                <FiFileText className="text-[var(--color-accent)]" size={16} />
                <span>Preview Resume</span>
              </button>

              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-3 text-sm font-medium text-subtle hover:text-heading hover:border-[var(--color-border-hover)] transition"
                title="Direct PDF Download"
              >
                <FiDownload size={15} />
                <span className="hidden sm:inline">Download PDF</span>
              </a>
            </div>

            {/* Quick Contact & Social Handles */}
            <div className="flex flex-wrap items-center gap-4 pt-3 text-xs sm:text-sm text-subtle">
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:text-heading hover:border-[var(--color-accent)] transition"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:text-heading hover:border-[var(--color-accent)] transition"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] hover:text-emerald-400 hover:border-emerald-500 transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={16} />
                </a>
              </div>

              <span className="text-muted">•</span>

              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-1.5 text-xs text-subtle hover:text-heading transition cursor-pointer"
              >
                <FiMail className="text-[var(--color-accent-2)]" />
                <span>{profile.email}</span>
                {copied && (
                  <span className="text-emerald-400 flex items-center gap-0.5 text-[11px] font-semibold">
                    <FiCheckCircle size={12} /> Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Preview */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <InteractiveTerminal />
          </div>
        </div>

        {/* Tech Stack Floating Badge Strip */}
        <div className="mt-14 pt-8 border-t border-[var(--color-border)]">
          <p className="text-xs uppercase tracking-wider font-semibold text-muted text-center sm:text-left mb-4">
            Primary Tech Stack & Tools
          </p>
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
            {techBadges.map((t) => {
              const IconComp = t.icon;
              return (
                <div
                  key={t.name}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-xs font-medium text-subtle transition shadow-xs"
                >
                  <IconComp className={t.color} size={15} />
                  <span>{t.name}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
