import { Helmet } from 'react-helmet-async';
import { Download, FileWarning } from 'lucide-react';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export default function Resume() {
  return (
    <>
      <Helmet>
        <title>Resume — Abdul Raoof</title>
        <meta
          name="description"
          content="View or download Abdul Raoof's resume — Full Stack MERN Developer."
        />
      </Helmet>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="~/resume" title="Resume" />
            <a
              href={profile.resumeUrl}
              download
              className="mb-1 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-dim"
            >
              <Download size={16} /> Download PDF
            </a>
          </div>

          <Reveal delay={0.1} className="mt-10">
            <div className="card-surface overflow-hidden">
              <object
                data={profile.resumeUrl}
                type="application/pdf"
                className="hidden h-[80vh] w-full sm:block"
                aria-label="Abdul Raoof resume PDF"
              >
                <p className="p-8 text-ink-secondary">
                  Your browser can't preview PDFs inline.{' '}
                  <a href={profile.resumeUrl} className="text-accent underline">
                    Download the resume
                  </a>{' '}
                  instead.
                </p>
              </object>

              {/* Fallback / placeholder notice until a real PDF is added */}
              <div className="flex flex-col items-center gap-3 p-12 text-center sm:hidden">
                <FileWarning className="text-accent" size={28} />
                <p className="text-ink-secondary">
                  Tap "Download PDF" above to view the resume on mobile.
                </p>
              </div>
            </div>
            <p className="mt-4 font-mono text-xs text-ink-tertiary">
              Note: this links to a placeholder file until the real resume PDF is added
              at <code className="text-ink-secondary">public/resume.pdf</code>.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
