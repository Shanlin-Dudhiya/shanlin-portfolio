import { useEffect } from "react";
import { FiX, FiExternalLink, FiCpu, FiLayers, FiCheckCircle } from "react-icons/fi";
import { SiPostgresql, SiGooglegemini } from "react-icons/si";
import { TbBrain, TbVectorTriangle } from "react-icons/tb";

export default function RAGArchitectureModal({ isOpen, onClose }) {
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

  const steps = [
    {
      num: "01",
      title: "BFS Web Crawler",
      tech: "Same-Domain & Robots.txt Compliant",
      desc: "Recursively extracts unique HTML pages within the target domain boundary while respecting robots.txt directives.",
      icon: FiLayers,
      color: "text-sky-400 bg-sky-950/50 border-sky-800/40",
    },
    {
      num: "02",
      title: "Document Chunker & Cleaner",
      tech: "Token-Aware Text Normalization",
      desc: "Splits raw page content into semantically coherent chunks with overlap to preserve surrounding context.",
      icon: FiCpu,
      color: "text-amber-400 bg-amber-950/50 border-amber-800/40",
    },
    {
      num: "03",
      title: "Voyage AI Vector Embeddings",
      tech: "High-Dimensional Vectorization",
      desc: "Converts text chunks into dense mathematical vector representations optimized for retrieval accuracy.",
      icon: TbVectorTriangle,
      color: "text-purple-400 bg-purple-950/50 border-purple-800/40",
    },
    {
      num: "04",
      title: "Neon PostgreSQL with pgvector",
      tech: "Cosine Similarity Indexing (HNSW/IVFFlat)",
      desc: "Stores vector embeddings on Neon serverless Postgres; performs low-latency nearest-neighbor search for queries.",
      icon: SiPostgresql,
      color: "text-blue-400 bg-blue-950/50 border-blue-800/40",
    },
    {
      num: "05",
      title: "Google Gemini Synthesis",
      tech: "Structured JSON Output + Grounded Citations",
      desc: "Injects retrieved top-k chunks into Gemini prompt, guaranteeing that answers cite verifiable URLs with zero hallucination.",
      icon: SiGooglegemini,
      color: "text-emerald-400 bg-emerald-950/50 border-emerald-800/40",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)] bg-[var(--color-surface)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-violet-500/10 text-[var(--color-accent)] border border-violet-500/20">
                <TbBrain size={18} />
              </span>
              <h3 className="font-bold text-heading text-base sm:text-lg">
                Chat with a Website — RAG Architecture
              </h3>
            </div>
            <p className="text-xs text-muted mt-1">
              Deep dive into the retrieval-augmented generation and vector pipeline
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted hover:text-heading rounded-lg hover:bg-[var(--color-surface-hover)] transition"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6 bg-[var(--color-surface)] text-[var(--color-body)]">
          {/* Key Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center">
              <span className="text-xs text-muted block uppercase font-medium">Hosting Cost</span>
              <span className="text-lg font-bold text-emerald-400">$0 / month (Free Tier)</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center">
              <span className="text-xs text-muted block uppercase font-medium">Vector Engine</span>
              <span className="text-lg font-bold text-sky-400">PostgreSQL + pgvector</span>
            </div>
            <div className="p-3 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] text-center">
              <span className="text-xs text-muted block uppercase font-medium">LLM Reasoning</span>
              <span className="text-lg font-bold text-violet-400">Google Gemini API</span>
            </div>
          </div>

          {/* Step by Step Flow */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-heading">
              Pipeline Data Flow
            </h4>
            <div className="space-y-3">
              {steps.map((st) => {
                const IconComponent = st.icon;
                return (
                  <div
                    key={st.num}
                    className="flex items-start gap-4 p-4 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] transition"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${st.color}`}>
                      <IconComponent size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                        <h5 className="text-sm font-semibold text-heading">
                          <span className="text-xs text-muted mr-2 font-mono">{st.num}.</span>
                          {st.title}
                        </h5>
                        <span className="text-[11px] font-medium text-[var(--color-accent-2)] bg-[var(--color-accent-2)]/10 px-2 py-0.5 rounded-full border border-[var(--color-accent-2)]/20">
                          {st.tech}
                        </span>
                      </div>
                      <p className="text-xs text-body leading-relaxed">{st.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom callout */}
          <div className="p-4 rounded-xl bg-violet-950/20 border border-violet-500/20 text-xs text-subtle flex items-start gap-3">
            <FiCheckCircle className="text-violet-400 shrink-0 mt-0.5" size={16} />
            <p>
              <strong>Structured Verification:</strong> Unlike traditional chatbot wrappers, this architecture strictly encloses citation URLs returned by pgvector inside structured JSON schemas, eliminating hallucinated links entirely.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-[var(--color-border)] bg-[var(--color-surface)] text-xs">
          <a
            href="https://chat-with-website-kappa.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--color-accent-2)] hover:underline"
          >
            Open Live Demo <FiExternalLink size={12} />
          </a>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] text-subtle hover:text-heading transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
