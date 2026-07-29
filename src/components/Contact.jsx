import Section from "./Section";
import { profile } from "../data";

export default function Contact() {
  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something">
      <div className="card p-8 sm:p-12 text-center">
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          I'm open to full stack developer roles and freelance projects. Reach out
          and I'll get back to you.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition"
          >
            {profile.email}
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-medium text-zinc-200 hover:border-zinc-500 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2C6.486 2 2 6.486 2 12.004c0 1.996.586 3.85 1.594 5.412L2 22l4.688-1.567A9.96 9.96 0 0 0 12.004 22C17.522 22 22 17.514 22 12.004 22 6.486 17.522 2 12.004 2zm0 18.152a8.13 8.13 0 0 1-4.145-1.135l-.297-.176-3.088 1.033 1.049-3.024-.194-.31a8.12 8.12 0 0 1-1.24-4.336c0-4.49 3.654-8.144 8.144-8.144s8.144 3.654 8.144 8.144-3.654 8.148-8.144 8.148z" />
            </svg>
            {profile.phone}
          </a>
        </div>
        <div className="flex justify-center gap-6 mt-8 text-sm text-zinc-500">
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </Section>
  );
}
