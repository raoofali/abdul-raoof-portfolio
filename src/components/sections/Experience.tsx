import { Briefcase, MapPin } from 'lucide-react';
import { experience } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

export function Experience() {
  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="container-page">
        <SectionHeading eyebrow="~/experience" title="Where I've worked" />

        <div className="mt-10 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="card-surface flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:justify-between sm:p-8">
                <div>
                  <div className="flex items-center gap-2 text-accent">
                    <Briefcase size={16} />
                    <span className="font-mono text-xs uppercase tracking-wide">
                      {job.period}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-semibold text-ink">{job.role}</h3>
                  <p className="mt-1 text-ink-secondary">{job.company}</p>
                  <p className="mt-1 flex items-center gap-1.5 font-mono text-xs text-ink-tertiary">
                    <MapPin size={12} /> {job.location}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {job.responsibilities.map((r) => (
                      <li key={r} className="flex gap-2 text-sm text-ink-secondary">
                        <span className="text-accent">—</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.tech.map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
