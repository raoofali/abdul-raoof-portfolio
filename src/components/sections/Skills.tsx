import { skills } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

export function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="~/skills"
          title="Tools I reach for"
          description="A stack focused on shipping fast, type-safe, maintainable applications."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], i) => (
            <Reveal key={category} delay={i * 0.06}>
              <div className="card-surface h-full p-6">
                <h3 className="font-mono text-sm text-accent">{category}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
