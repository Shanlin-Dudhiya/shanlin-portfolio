import { useState, useRef, useEffect } from "react";
import { profile } from "../data";
import { FiTerminal, FiCornerDownLeft } from "react-icons/fi";

const COMMANDS = {
  help: "Available commands: summary, skills, projects, experience, contact, clear",
  summary: profile.summary,
  skills: `Core Languages: JavaScript (ES6+), SQL, HTML5, CSS3
Frameworks: React.js, Next.js, Node.js, Express.js
Databases: PostgreSQL (pgvector), MongoDB, MySQL, MS SQL
AI & LLMs: Gemini API, Voyage AI, RAG Pipelines
Cloud/DevOps: Linux Servers, SSH, cPanel, Vercel`,
  projects: `1. Chat with a Website (Next.js, pgvector, Gemini RAG)
2. Bulk Mail Sender (React, Node, Express, xlsx parser)
3. Bookworm Storefront (100+ Books, Buy Now Flow)
4. LR Photo Presets Platform (Express API, Before/After Slider)`,
  experience: `• Green Leaves Academy Pvt. Ltd. (July 2025 – June 2026) - Full Stack Developer
• Reveation Technologies LLP (Jan 2025 – June 2025) - MERN Stack Developer Trainee`,
  contact: `Email: ${profile.email} | Phone: ${profile.phone} | GitHub: @Shanlin-Dudhiya`,
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState([
    {
      type: "system",
      text: "⚡ Shanlin Dudhiya Shell v2.6.0 (x86_64-linux-gnu)",
    },
    {
      type: "system",
      text: "Type 'help' or click presets below to inspect developer profile.",
    },
    {
      type: "command",
      cmd: "curl -s /api/status",
      output: `Status: 200 OK | Availability: OPEN FOR OPPORTUNITIES | Role: ${profile.title}`,
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (cmdStr) => {
    const trimmed = cmdStr.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    let output = "";
    if (COMMANDS[trimmed]) {
      output = COMMANDS[trimmed];
    } else if (trimmed === "about" || trimmed === "cat summary.txt") {
      output = profile.summary;
    } else {
      output = `Command not found: '${trimmed}'. Type 'help' for options.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: "command", cmd: cmdStr, output },
    ]);
    setInputVal("");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  return (
    <div className="w-full rounded-2xl overflow-hidden border border-[var(--color-border)] bg-[#0c0d16] shadow-2xl font-mono text-xs text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#141523] border-b border-[#212338]">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#10b981]/80 inline-block" />
          <span className="ml-2 text-[11px] text-gray-400 font-medium flex items-center gap-1.5">
            <FiTerminal className="text-violet-400" /> shanlin@portfolio:~
          </span>
        </div>
        <span className="text-[10px] text-emerald-400 font-medium bg-emerald-950/60 border border-emerald-800/40 px-2 py-0.5 rounded-full">
          ● bash active
        </span>
      </div>

      {/* Terminal Body */}
      <div className="p-4 max-h-64 sm:max-h-72 overflow-y-auto space-y-2.5 leading-relaxed text-gray-300">
        {history.map((item, idx) => (
          <div key={idx} className="space-y-1">
            {item.type === "system" && (
              <p className="text-gray-400 text-[11px]">{item.text}</p>
            )}
            {item.type === "command" && (
              <>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                  <span className="text-violet-400">$</span>
                  <span>{item.cmd}</span>
                </div>
                {item.output && (
                  <pre className="whitespace-pre-wrap text-gray-300 pl-3 border-l-2 border-violet-500/30 text-[11px] font-mono">
                    {item.output}
                  </pre>
                )}
              </>
            )}
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Quick Command Pills */}
      <div className="px-3 py-2 bg-[#121320] border-t border-[#1e2034] flex flex-wrap items-center gap-1.5">
        <span className="text-[10px] text-gray-500 mr-1">Presets:</span>
        {["summary", "skills", "projects", "experience", "contact", "clear"].map(
          (cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="text-[10px] px-2 py-0.5 rounded bg-[#1c1e30] hover:bg-violet-600/30 hover:text-violet-300 text-gray-400 border border-gray-700/50 transition cursor-pointer"
            >
              {cmd}
            </button>
          )
        )}
      </div>

      {/* Interactive Input Form */}
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 px-3 py-2.5 bg-[#0e0f1a] border-t border-[#1e2034]"
      >
        <span className="text-violet-400 font-bold">$</span>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="type a command (e.g. skills, projects)..."
          className="flex-1 bg-transparent text-gray-200 outline-none placeholder:text-gray-600 text-xs font-mono"
        />
        <button
          type="submit"
          className="p-1 text-gray-500 hover:text-violet-400 transition"
          aria-label="Execute command"
        >
          <FiCornerDownLeft size={14} />
        </button>
      </form>
    </div>
  );
}
