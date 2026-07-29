import Section from "./Section";
import { skills } from "../data";
import skillIcons from "../skillIcons";

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="Who I am">
      <div className="grid md:grid-cols-2 gap-12">
        <p className="text-body leading-relaxed">
          I'm a full stack developer based in Ahmedabad, India, focused on the MERN
          stack. Over the last couple of years I've shipped production sites end to
          end — from React frontends and Express/Node APIs to MongoDB and SQL data
          layers, deployed and maintained on real Linux servers. I care about clean
          UI, fast load times, and APIs that don't fall over.
        </p>
        <div id="skills">
          <h3 className="text-heading font-medium mb-4">Skills</h3>
          <div className="space-y-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className={
                  group.highlight
                    ? "rounded-xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/5 p-3 -m-3"
                    : ""
                }
              >
                <p className="text-xs uppercase tracking-wide text-muted mb-2 flex items-center gap-2">
                  {group.category}
                  {group.highlight && (
                    <span className="text-[10px] normal-case tracking-normal font-medium text-white bg-[var(--color-accent)] rounded-full px-2 py-0.5">
                      New
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => {
                    const Icon = item.icon ? skillIcons[item.icon] : null;
                    return (
                      <span
                        key={item.name}
                        className="inline-flex items-center gap-1.5 text-sm text-subtle bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full px-3 py-1"
                      >
                        {Icon && <Icon className="text-[var(--color-accent-2)]" size={14} />}
                        {item.name}
                      </span>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
