import { useState } from "react";
import Section from "./Section";
import { profile, skills } from "../data";
import skillIcons from "../skillIcons";
import {
  FiServer,
  FiCode,
  FiArrowUpRight,
} from "react-icons/fi";
import { TbBrain } from "react-icons/tb";

export default function About({ onOpenRAGArchitecture }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Languages",
    "Frameworks / Libraries",
    "Databases",
    "AI / LLM",
    "Cloud / DevOps",
    "Tools & Platforms",
  ];

  const filteredGroups =
    activeCategory === "All"
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const aiGroup = skills.find((s) => s.category === "AI / LLM");
  const cloudGroup = skills.find((s) => s.category === "Cloud / DevOps");

  return (
    <Section id="about" eyebrow="Engineering Profile" title="Skills & Architecture">
      {/* Top Bento Grid: Bio + 4 Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Bio — Large Tile */}
        <div className="md:col-span-2 md:row-span-2 bento-tile p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-accent-2)] mb-4">
              <FiCode size={13} />
              <span>Full Stack Mindset</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-heading mb-3">
              Engineering reliable applications from DB to UI.
            </h3>
            <p className="text-body text-sm sm:text-base leading-relaxed mb-4">
              Based in Ahmedabad, India, I specialize in the MERN stack (React, Node, Express, MongoDB),
              relational database design, and production Linux deployments. Over the past year,
              I've taken full ownership of deploying business-critical websites, building internal
              automation tools, and architecting retrieval-augmented generation (RAG) pipelines.
            </p>
            <p className="text-body text-sm leading-relaxed">
              I place high priority on clean component hierarchies, robust API validation, query optimization,
              and seamless developer ergonomics.
            </p>
          </div>

          <div className="pt-6 border-t border-[var(--color-border)] mt-6 flex flex-wrap items-center justify-between text-xs text-muted">
            <span>Primary Focus: React &bull; Node.js &bull; AI/RAG</span>
            <span className="text-[var(--color-accent)] font-semibold">Ahmedabad, Gujarat</span>
          </div>
        </div>

        {/* 4 Stats Cards */}
        {profile.stats.map((st) => (
          <div key={st.label} className="bento-tile stat-tile">
            <span className="stat-value gradient-text">{st.value}</span>
            <span className="stat-label">{st.label}</span>
            <span className="text-[11px] text-body mt-0.5">{st.detail}</span>
          </div>
        ))}
      </div>

      {/* Featured AI & DevOps Spotlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {/* AI & RAG Spotlight Card */}
        <div className="bento-tile accent p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] bg-purple-500/10 px-2.5 py-1 rounded-full border border-purple-500/20">
                <TbBrain size={14} /> AI / RAG Specialization
              </span>
              <span className="text-[10px] uppercase font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded">
                High Demand
              </span>
            </div>
            <h4 className="text-lg font-bold text-heading mb-2">
              Retrieval-Augmented Generation & Vector Search
            </h4>
            <p className="text-xs sm:text-sm text-body leading-relaxed mb-4">
              Building end-to-end RAG pipelines with BFS web scrapers, Voyage AI semantic embeddings,
              Neon PostgreSQL vector similarity search (<code className="text-xs bg-[var(--color-bg)] px-1 py-0.5 rounded text-purple-300">pgvector</code>),
              and Google Gemini structured JSON reasoning with source citations.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {aiGroup?.items.map((it) => (
                <span
                  key={it.name}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-subtle font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]" />
                  {it.name}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={onOpenRAGArchitecture}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent-2)] hover:underline cursor-pointer"
          >
            <span>Inspect Interactive RAG Architecture</span>
            <FiArrowUpRight size={14} />
          </button>
        </div>

        {/* Linux Server & DevOps Spotlight Card */}
        <div className="bento-tile p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[var(--color-accent-2)] bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                <FiServer size={14} /> Linux & DevOps
              </span>
              <span className="text-[10px] uppercase font-bold text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2 py-0.5 rounded">
                Production
              </span>
            </div>
            <h4 className="text-lg font-bold text-heading mb-2">
              Production Server Deployment & Management
            </h4>
            <p className="text-xs sm:text-sm text-body leading-relaxed mb-4">
              Hands-on management of live Linux hosting environments, SSH terminal access via PuTTY,
              cPanel, FileZilla FTP, domain DNS configuration, SSL certification renewals, and automated
              Vercel / GitHub CI/CD workflows.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {cloudGroup?.items.map((it) => (
                <span
                  key={it.name}
                  className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-subtle font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent-2)]" />
                  {it.name}
                </span>
              ))}
            </div>
          </div>
          <a
            href="#experience"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent-2)] hover:underline"
          >
            <span>View Production Deployment Experience</span>
            <FiArrowUpRight size={14} />
          </a>
        </div>
      </div>

      {/* Interactive Skills Filter & Explorer */}
      <div id="skills" className="bento-tile p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold text-heading">Complete Technical Skillset</h3>
            <p className="text-xs text-muted mt-1">
              Categorized technologies, tools, and platforms from Shanlin's resume
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-full transition cursor-pointer font-medium ${
                  activeCategory === cat
                    ? "bg-[var(--color-accent)] text-white shadow-xs"
                    : "bg-[var(--color-bg)] border border-[var(--color-border)] text-body hover:text-heading hover:border-[var(--color-border-hover)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Cards Grid */}
        <div className="space-y-6">
          {filteredGroups.map((group) => (
            <div
              key={group.category}
              className="p-5 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)]"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                <h4 className="text-sm font-bold text-heading uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  {group.category}
                </h4>
                {group.description && (
                  <span className="text-xs text-muted">{group.description}</span>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
                {group.items.map((item) => {
                  const Icon = item.icon ? skillIcons[item.icon] : null;
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition shadow-xs group"
                    >
                      <div className="p-1.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-accent-2)] group-hover:text-[var(--color-accent)] transition">
                        {Icon ? <Icon size={16} /> : <FiCode size={16} />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold text-heading truncate">
                          {item.name}
                        </p>
                        {item.level && (
                          <span className="text-[10px] text-muted block font-medium">
                            {item.level}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
