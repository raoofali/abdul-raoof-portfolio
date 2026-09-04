
import { Reveal } from '@/components/ui/Reveal';

const highlights = [
  '3+ Years Experience',
  '20+ Projects',
  'Full-Stack Development',
  'Real-time Systems',
];

export function Stats() {
  return (
    <section className="border-t border-border py-14 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div>
            <h3 className="mb-6 text-center font-display text-xl font-bold text-ink">
              Quick Highlights
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-xl border border-border px-5 py-4 text-center"
                >
                  <p className="font-mono text-sm font-medium text-ink">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
