import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "../data";
import { FiFileText, FiMenu, FiX, FiMail, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Navbar({ onOpenResume }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute("data-theme") || "dark"
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2.5px] z-50 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border)] shadow-xs"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-center gap-2 font-bold text-heading tracking-tight text-lg group"
          >
            <span className="w-8 h-8 rounded-xl bg-violet-600/15 border border-violet-500/30 flex items-center justify-center text-[var(--color-accent)] font-mono text-sm group-hover:scale-105 transition">
              SD
            </span>
            <span>
              Shanlin<span className="gradient-text">.dev</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-7 text-xs font-semibold text-body uppercase tracking-wider">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-heading hover:text-[var(--color-accent-2)] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[var(--color-border)] hover:border-[var(--color-border-hover)] bg-[var(--color-surface)] text-xs font-medium text-heading hover:bg-[var(--color-surface-hover)] transition cursor-pointer"
            >
              <FiFileText className="text-[var(--color-accent)]" size={13} />
              <span>Resume</span>
            </button>

            <ThemeToggle theme={theme} onToggle={toggleTheme} />

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 rounded-full bg-[var(--color-accent)] px-4 py-2 text-xs font-semibold text-white hover:bg-[var(--color-accent-hover)] transition shadow-xs"
            >
              <FiMail size={13} />
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-[var(--color-border)] text-xs font-medium text-heading"
            >
              <FiFileText className="text-[var(--color-accent)]" size={13} />
              <span>CV</span>
            </button>
            <ThemeToggle theme={theme} onToggle={toggleTheme} />
            <button
              className="p-1.5 text-subtle hover:text-heading transition"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle navigation"
            >
              {open ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden px-6 pb-6 pt-2 bg-[var(--color-bg)] border-b border-[var(--color-border)] space-y-3 animate-fade-in">
            <ul className="flex flex-col gap-1 text-sm font-medium text-subtle">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 hover:text-heading hover:text-[var(--color-accent-2)] transition"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-subtle hover:text-heading"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-subtle hover:text-heading"
                >
                  <FaLinkedin size={16} />
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] text-emerald-400"
                >
                  <FaWhatsapp size={16} />
                </a>
              </div>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-accent)] text-white text-xs font-semibold"
              >
                <FiDownload size={13} />
                <span>Download PDF</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
