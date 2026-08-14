import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function ContactCTA() {
  return (
    <section className="border-t border-border py-24">
      <div className="container-page">
        <Reveal>
          <div className="card-surface relative overflow-hidden p-10 text-center sm:p-16">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  'radial-gradient(500px circle at 50% 0%, rgba(62,123,250,0.25), transparent 60%)',
              }}
            />
            <p className="eyebrow relative">~/contact</p>
            <h2 className="relative mt-3 text-3xl font-semibold sm:text-4xl">
              Have a project in mind?
            </h2>
            <p className="relative mx-auto mt-4 max-w-md text-ink-secondary">
              I'm open to full-stack roles, frontend engineering work, and freelance
              MERN projects. Let's talk about what you're building.
            </p>
            <Link
              to="/contact"
              className="relative mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-sm font-medium text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dim"
            >
              Get in touch <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
