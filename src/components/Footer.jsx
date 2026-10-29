import { profile } from "../data";
import { FiArrowUp, FiFileText, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-12">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 pb-8 border-b border-[var(--color-border)]">
          {/* Col 1: Bio */}
          <div className="md:col-span-2 space-y-3">
            <a href="#top" className="font-bold text-heading text-lg inline-block">
              Shanlin<span className="gradient-text">.dev</span>
            </a>
            <p className="text-xs sm:text-sm text-body max-w-sm leading-relaxed">
              Full Stack Developer building high-performance MERN web applications,
              scalable REST APIs, and modern AI/RAG architectures.
            </p>
            <p className="text-xs text-muted">
              Based in Ahmedabad, Gujarat, India &middot; Open to relocation & remote work.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-heading mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-body">
              <li>
                <a href="#about" className="hover:text-heading transition">
                  About & Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-heading transition">
                  Portfolio Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-heading transition">
                  Work Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-heading transition">
                  Academic Credentials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-heading transition">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Resume & Connect */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-heading mb-3">
              Resume & Profiles
            </h4>
            <ul className="space-y-2 text-xs text-body">
              <li>
                <button
                  onClick={onOpenResume}
                  className="hover:text-[var(--color-accent)] inline-flex items-center gap-1.5 transition cursor-pointer"
                >
                  <FiFileText size={12} />
                  <span>Preview Resume</span>
                </button>
              </li>
              <li>
                <a
                  href={profile.resumeUrl}
                  download
                  className="hover:text-[var(--color-accent)] inline-flex items-center gap-1.5 transition"
                >
                  <FiDownload size={12} />
                  <span>Download PDF</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-accent)] inline-flex items-center gap-1.5 transition"
                >
                  <FaGithub size={12} />
                  <span>GitHub Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[var(--color-accent)] inline-flex items-center gap-1.5 transition"
                >
                  <FaLinkedin size={12} />
                  <span>LinkedIn Profile</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-emerald-400 inline-flex items-center gap-1.5 transition"
                >
                  <FaWhatsapp size={12} />
                  <span>WhatsApp Chat</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <p className="flex items-center gap-1">
            Built with React, Vite &amp; Tailwind CSS
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-border-hover)] text-subtle hover:text-heading transition cursor-pointer"
          >
            <span>Back to top</span>
            <FiArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
