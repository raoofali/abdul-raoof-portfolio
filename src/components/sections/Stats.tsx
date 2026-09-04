import CountUp from 'react-countup';
import { projects, skills } from '@/data/profile';
import { Reveal } from '@/components/ui/Reveal';

const allSkills = Object.values(skills).flat();

const stats = [
  { label: 'Projects built', value: projects.length, suffix: '+' },
  { label: 'Technologies used', value: allSkills.length, suffix: '+' },
  { label: 'Experience', value: 3, suffix: '+' },
];

export function Stats() {
  return (
    <section className="border-t border-border py-14 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-ink sm:text-4xl">
                  <CountUp
                    end={stat.value}
                    duration={1.8}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  {stat.suffix}
                </p>

                <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink-tertiary">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
