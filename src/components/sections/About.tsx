import { GraduationCap } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container-page">
        <SectionHeading eyebrow="~/about" title="A bit about me" />

        <div className="mt-10 grid gap-10 lg:grid-cols-3">
          <Reveal delay={0.05} className="lg:col-span-2">
            <p className="text-lg leading-relaxed text-ink-secondary">
              {profile.longBio}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-surface p-6">
              <div className="mb-3 flex items-center gap-2 text-accent">
                <GraduationCap size={18} />
                <span className="font-mono text-xs uppercase tracking-wide">
                  Education
                </span>
              </div>
              {profile.education.map((edu) => (
                <div key={edu.uni}>
                  <p className="font-medium text-ink">{edu.degree}</p>
                  <p className="mt-1 text-sm text-ink-secondary">{edu.uni}</p>
                  <p className="mt-1 font-mono text-xs text-ink-tertiary">
                    {edu.period} · {edu.note}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
