import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Github, ArrowRight } from 'lucide-react';
import { projects, type Project } from '@/data/profile';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

function FeaturedProjectCard({ project }: { project: Project }) {
  const screenshots = project.screenshots ?? [];

  const [activeScreenshot, setActiveScreenshot] = useState(
    screenshots[0] ?? project.screenshot ?? ''
  );

  return (
    <div className="card-surface group overflow-hidden">

      {/* Main Project Layout */}
      <div className="grid lg:grid-cols-5">

        {/* LEFT: PROJECT INFORMATION */}
        <div className="p-6 sm:p-8 lg:col-span-2 lg:p-10">

          {/* Project number */}
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-xs text-ink-tertiary">
              01
            </span>

            <span className="h-px w-8 bg-border" />

            <span className="font-mono text-xs uppercase tracking-wider text-accent">
              Featured project
            </span>
          </div>

          <h3 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
            {project.name}
          </h3>

          <p className="mt-2 font-mono text-sm text-accent">
            {project.tagline}
          </p>

          <p className="mt-5 leading-7 text-ink-secondary">
            {project.description}
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-2.5">
            {project.features.slice(0, 4).map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-2 text-sm text-ink-secondary"
              >
                <span className="mt-0.5 font-mono text-signal-green">
                  ✓
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Tech Stack */}
          <div className="mt-7 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          {/* Links */}
          <div className="mt-8 flex flex-wrap items-center gap-4">

            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm font-medium text-ink transition-colors hover:text-accent"
              >
                Live demo
                <ArrowUpRight size={14} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-sm text-ink-secondary transition-colors hover:text-ink"
              >
                <Github size={14} />
                Source
              </a>
            )}

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 font-mono text-sm text-ink-secondary transition-colors hover:text-ink"
            >
              Case study
              <ArrowRight size={14} />
            </Link>

          </div>
        </div>

        {/* RIGHT: PROJECT VISUAL */}
        <div className="relative flex flex-col justify-center bg-bg-elevated/40 p-4 sm:p-6 lg:col-span-3 lg:p-8">

          {/* Browser-style screenshot frame */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-bg-raised group-hover:scale-[1.035] shadow-card">

            {/* Browser top bar */}
            <div className="flex h-9 items-center gap-1.5 border-b border-border bg-bg-elevated px-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />

              <div className="ml-3 hidden h-5 flex-1 items-center rounded bg-bg-raised px-3 sm:flex">
                <span className="font-mono text-[10px] text-ink-tertiary">
                  {project.name.toLowerCase().replace(/\s+/g, '-')}
                </span>
              </div>
            </div>

            {/* Main Screenshot */}
            <div className="relative aspect-[16/10] overflow-hidden bg-bg">
              {activeScreenshot ? (
                <img
                  src={activeScreenshot}
                  alt={`${project.name} preview`}
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <div className="flex h-full items-center justify-center font-mono text-sm text-ink-tertiary">
                  Project preview
                </div>
              )}

              {/* Subtle overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Screenshot thumbnails */}
          {screenshots.length > 1 && (
            <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
              {screenshots.slice(0, 4).map((screenshot, index) => (
                <button
                  key={screenshot}
                  type="button"
                  onClick={() => setActiveScreenshot(screenshot)}
                  className={`group/thumb relative h-16 w-24 shrink-0 overflow-hidden rounded-md border transition-all duration-200 sm:h-20 sm:w-28 ${
                    activeScreenshot === screenshot
                      ? 'border-accent shadow-glow'
                      : 'border-border opacity-60 hover:border-accent/50 hover:opacity-100'
                  }`}
                  aria-label={`View screenshot ${index + 1}`}
                >
                  <img
                    src={screenshot}
                    alt=""
                    className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/thumb:scale-105"
                  />

                  {activeScreenshot === screenshot && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-accent" />
                  )}
                </button>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="container-page">

        {/* SECTION HEADER */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="~/projects"
            title="Featured work"
            description="Selected projects that show how I approach real problems end to end."
          />

          <Link
            to="/projects"
            className="mb-1 flex items-center gap-1.5 font-mono text-sm text-accent transition-colors hover:text-ink"
          >
            View all projects
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* PROJECTS */}
        <div className="mt-10 grid gap-8">
          {featured.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.08}
            >
              <FeaturedProjectCard project={project} />
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}