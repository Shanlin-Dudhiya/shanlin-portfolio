import Section from "./Section";
import { skills, experience, projects } from "../data";
import skillIcons from "../skillIcons";

const coreCategories = ["Languages", "Frameworks / Libraries", "Databases"];

function SkillChip({ item }) {
  const Icon = item.icon ? skillIcons[item.icon] : null;
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-subtle bg-[var(--color-bg)] border border-[var(--color-border)] rounded-full px-3 py-1">
      {Icon && <Icon className="text-[var(--color-accent-2)]" size={14} />}
      {item.name}
    </span>
  );
}

export default function About() {
  const coreSkills = skills.filter((g) => coreCategories.includes(g.category));
  const aiSkills = skills.find((g) => g.category === "AI / LLM");
  const toolsSkills = skills.find((g) => g.category === "Tools & Platforms");
  const cloudSkills = skills.find((g) => g.category === "Cloud / DevOps");

  const coreCount = coreSkills.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <div id="skills" className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Bio — large tile */}
        <div className="md:col-span-2 md:row-span-2 bento-tile p-8 flex flex-col justify-center">
          <p className="text-body leading-relaxed">
            I'm a full stack developer based in Ahmedabad, India, focused on the MERN
            stack. Over the past year I've shipped production sites end to
            end — from React frontends and Express/Node APIs to MongoDB and SQL data
            layers, deployed and maintained on real Linux servers. I care about clean
            UI, fast load times, and APIs that don't fall over.
          </p>
        </div>

        {/* Stats */}
        <div className="bento-tile stat-tile">
          <span className="stat-value gradient-text">{experience.length}</span>
          <span className="stat-label">Companies</span>
        </div>
        <div className="bento-tile stat-tile">
          <span className="stat-value gradient-text">{projects.length}</span>
          <span className="stat-label">Projects Shipped</span>
        </div>
        <div className="bento-tile stat-tile">
          <span className="stat-value gradient-text">1+</span>
          <span className="stat-label">Years Experience</span>
        </div>
        <div className="bento-tile stat-tile">
          <span className="stat-value gradient-text">{coreCount}+</span>
          <span className="stat-label">Core Technologies</span>
        </div>

        {/* Tech stack — full width */}
        <div className="md:col-span-4 bento-tile p-8">
          <h3 className="text-heading font-medium mb-5">Tech Stack</h3>
          <div className="space-y-4">
            {coreSkills.map((group) => (
              <div key={group.category}>
                <p className="text-xs uppercase tracking-wide text-muted mb-2">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillChip key={item.name} item={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI / LLM highlight */}
        <div className="md:col-span-2 bento-tile accent p-6">
          <p className="text-xs uppercase tracking-wide text-muted mb-2 flex items-center gap-2">
            {aiSkills.category}
            <span className="text-[10px] normal-case tracking-normal font-medium text-white bg-[var(--color-accent)] rounded-full px-2 py-0.5">
              New
            </span>
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {aiSkills.items.map((item) => (
              <SkillChip key={item.name} item={item} />
            ))}
          </div>
          <a
            href="#projects"
            className="text-xs text-[var(--color-accent-2)] hover:underline"
          >
            Built into "Chat with a Website" →
          </a>
        </div>

        {/* Tools & Platforms */}
        <div className="md:col-span-1 bento-tile p-6">
          <p className="text-xs uppercase tracking-wide text-muted mb-2">
            {toolsSkills.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {toolsSkills.items.map((item) => (
              <SkillChip key={item.name} item={item} />
            ))}
          </div>
        </div>

        {/* Cloud / DevOps */}
        <div className="md:col-span-1 bento-tile p-6">
          <p className="text-xs uppercase tracking-wide text-muted mb-2">
            {cloudSkills.category}
          </p>
          <div className="flex flex-wrap gap-2">
            {cloudSkills.items.map((item) => (
              <SkillChip key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
