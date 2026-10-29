import { useState, useEffect } from "react";
import Section from "./Section";
import { profile } from "../data";
import {
  FiMail,
  FiCopy,
  FiCheck,
  FiSend,
  FiClock,
  FiMapPin,
  FiExternalLink,
} from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa6";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSent, setFormSent] = useState(false);

  // Live Local Time in Ahmedabad (IST)
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Portfolio Inquiry from ${formData.name || "Recruiter"}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setFormSent(true);
  };

  return (
    <Section
      id="contact"
      eyebrow="Get In Touch"
      title="Let's Build Something Together"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left: Contact Info & Local Status */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bento-tile p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-xl font-bold text-heading mb-2">
                Let's talk opportunities.
              </h3>
              <p className="text-body text-sm leading-relaxed">
                Whether you have an open Full Stack Developer role, need a custom MERN application,
                or want to collaborate on AI/RAG architectures, my inbox is always open.
              </p>
            </div>

            {/* Live Ahmedabad Time Card */}
            <div className="p-4 rounded-2xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-xl bg-violet-500/10 text-[var(--color-accent)] border border-violet-500/20">
                  <FiClock size={16} />
                </span>
                <div>
                  <span className="text-xs text-muted block">Ahmedabad (IST) Time</span>
                  <span className="text-sm font-bold font-mono text-heading">
                    {localTime || "12:00:00 PM"}
                  </span>
                </div>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-2.5 py-1 rounded-full">
                ● Available
              </span>
            </div>

            {/* Quick Connect List */}
            <div className="space-y-3">
              {/* Email */}
              <div className="p-3.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-[var(--color-surface)] text-[var(--color-accent-2)]">
                    <FiMail size={16} />
                  </span>
                  <div className="min-w-0">
                    <span className="text-[11px] text-muted block uppercase font-medium">Email</span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-semibold text-heading truncate block hover:text-[var(--color-accent)] transition"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg hover:bg-[var(--color-surface)] text-subtle hover:text-heading transition cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <FiCheck className="text-emerald-400" size={16} /> : <FiCopy size={16} />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-3.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center justify-between gap-2">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-[var(--color-surface)] text-emerald-400">
                    <FaWhatsapp size={16} />
                  </span>
                  <div className="min-w-0">
                    <span className="text-[11px] text-muted block uppercase font-medium">WhatsApp / Phone</span>
                    <a
                      href={profile.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-semibold text-heading truncate block hover:text-emerald-400 transition"
                    >
                      {profile.phone}
                    </a>
                  </div>
                </div>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg hover:bg-[var(--color-surface)] text-subtle hover:text-emerald-400 transition"
                  title="Chat on WhatsApp"
                >
                  <FiExternalLink size={16} />
                </a>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] flex items-center gap-3">
                <span className="p-2 rounded-lg bg-[var(--color-surface)] text-rose-400">
                  <FiMapPin size={16} />
                </span>
                <div>
                  <span className="text-[11px] text-muted block uppercase font-medium">Location</span>
                  <span className="text-xs sm:text-sm font-semibold text-heading">
                    {profile.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs">
              <span className="text-muted">Find me on:</span>
              <div className="flex items-center gap-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)] text-subtle hover:text-heading transition"
                >
                  <FaGithub size={13} />
                  <span>GitHub</span>
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[var(--color-bg)] border border-[var(--color-border)] hover:border-[var(--color-accent)] text-subtle hover:text-heading transition"
                >
                  <FaLinkedin size={13} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Quick Direct Email Form */}
        <div className="lg:col-span-7">
          <div className="bento-tile p-6 sm:p-8">
            <h3 className="text-xl font-bold text-heading mb-1">
              Send a Direct Message
            </h3>
            <p className="text-xs text-muted mb-6">
              Fill out the details below to open a pre-composed message in your email client.
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-heading block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Johnson"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-xs sm:text-sm text-heading outline-none transition"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-heading block mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-xs sm:text-sm text-heading outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold text-heading block mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="Job Opportunity / Project Collaboration"
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-xs sm:text-sm text-heading outline-none transition"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-heading block mb-1.5">
                  Message
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hi Shanlin, I came across your portfolio and wanted to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-bg)] border border-[var(--color-border)] focus:border-[var(--color-accent)] text-xs sm:text-sm text-heading outline-none transition resize-none"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-xs text-muted">
                  Typically replies within a few hours.
                </span>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--color-accent)] hover:bg-[var(--color-accent-hover)] text-white text-xs sm:text-sm font-semibold transition shadow-md shadow-violet-500/20 cursor-pointer"
                >
                  <span>Send Message</span>
                  <FiSend size={14} />
                </button>
              </div>

              {formSent && (
                <p className="text-xs text-emerald-400 mt-2 font-medium">
                  ✓ Opening mail client with your inquiry... You can also email directly at {profile.email}.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
