import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Github, ArrowUpRight, ImageOff } from 'lucide-react';
import { projects, type Project } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const screenshots = project.screenshots?.length
    ? project.screenshots
    : project.screenshot
    ? [project.screenshot]
    : [];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeScreenshot = screenshots[activeIndex];

  return (
    <Reveal key={project.slug} delay={delay}>
      <article className="grid gap-4 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="card-surface flex flex-col overflow-hidden">
            {activeScreenshot ? (
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-bg-elevated">
                <img
                  src={activeScreenshot}
                  alt={`${project.name} screenshot`}
                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>
            ) : (
              <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 text-ink-tertiary">
                <ImageOff size={22} />
                <span className="font-mono text-xs">Screenshot placeholder</span>
              </div>
            )}

            {screenshots.length > 1 ? (
              <div className="grid grid-cols-4 gap-1 p-2">
                {screenshots.map((screenshot, index) => (
                  <button
                    key={screenshot}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`overflow-hidden rounded-md border bg-bg-elevated transition duration-200 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      index === activeIndex
                        ? 'border-accent shadow-lg'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <img
                      src={screenshot}
                      alt={`${project.name} thumbnail ${index + 1}`}
                      className="h-20 w-full object-contain transition duration-300 hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-2xl font-semibold text-ink">{project.name}</h2>
          <p className="mt-1 font-mono text-sm text-accent">{project.tagline}</p>

          <div className="mt-5 space-y-4 text-ink-secondary">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink-tertiary">Problem</p>
              <p className="mt-1.5">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-ink-tertiary">Solution</p>
              <p className="mt-1.5">{project.solution}</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-ink-secondary">
                <span className="mt-0.5 text-signal-green">✓</span>
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-4">
            {project.live ? (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 font-mono text-sm text-white transition-all hover:-translate-y-0.5 hover:bg-accent-dim"
              >
                Live demo <ArrowUpRight size={14} />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 font-mono text-sm text-ink-tertiary">
                Live link coming soon
              </span>
            )}
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 font-mono text-sm text-ink hover:border-accent/50"
              >
                <Github size={14} /> Source
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 font-mono text-sm text-ink-tertiary">
                Source private
              </span>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <>
      <Helmet>
        <title>Projects — Abdul Raoof</title>
        <meta
          name="description"
          content="Case studies of full-stack MERN projects built by Abdul Raoof, including a complete Gym Management System."
        />
      </Helmet>

      <section className="py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="~/projects"
            title="Things I've built"
            description="Each project below includes the problem it solved, how I approached it, and what it's built with."
          />

          <div className="mt-14 space-y-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} delay={i * 0.05} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
