import Section from "./Section";
import { education } from "../data";

export default function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background">
      <div className="grid sm:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div key={edu.school} className="card p-6">
            <h3 className="text-white font-medium">{edu.school}</h3>
            <p className="text-sm text-zinc-400 mt-1">{edu.degree}</p>
            <div className="flex justify-between text-sm text-zinc-500 mt-4">
              <span>{edu.location}</span>
              <span>{edu.period}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
