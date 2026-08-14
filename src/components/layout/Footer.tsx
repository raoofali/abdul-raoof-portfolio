import { Github, Linkedin, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page">

        {/* Main Footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              to="/"
              className="font-mono text-lg font-semibold text-ink transition-colors hover:text-accent"
            >
              ABDUL RAOOF
            </Link>

            <p className="mt-3 max-w-sm text-sm leading-6 text-ink-secondary">
              Full Stack MERN Developer building fast, accessible and
              production-ready web applications.
            </p>

            <div className="mt-4 flex items-center gap-2 font-mono text-xs text-ink-tertiary">
              <MapPin size={13} />
              {profile.location}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-tertiary">
              Navigation
            </p>

            <nav className="mt-4 flex flex-col gap-2.5">
              <Link
                to="/"
                className="w-fit text-sm text-ink-secondary transition-colors hover:text-accent"
              >
                Home
              </Link>

              <Link
                to="/projects"
                className="w-fit text-sm text-ink-secondary transition-colors hover:text-accent"
              >
                Projects
              </Link>

              <Link
                to="/resume"
                className="w-fit text-sm text-ink-secondary transition-colors hover:text-accent"
              >
                Resume
              </Link>

              <Link
                to="/contact"
                className="w-fit text-sm text-ink-secondary transition-colors hover:text-accent"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-tertiary">
              Connect
            </p>

            <a
              href="mailto:raoofg46@gmail.com"
              className="mt-4 flex w-fit items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-accent"
            >
              <Mail size={15} />
              raoofg46@gmail.com
            </a>

            <div className="mt-5 flex items-center gap-3">

              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-raised text-ink-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <Github size={17} />
              </a>

              <a
                href="https://www.linkedin.com/in/abdul-raoof-b666861b1"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-bg-raised text-ink-secondary transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:text-accent"
              >
                <Linkedin size={17} />
              </a>

              <Link
                to="/contact"
                className="ml-1 inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-colors hover:text-ink"
              >
                Let's talk
                <ArrowUpRight size={13} />
              </Link>

            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-3 border-t border-border py-6 text-xs text-ink-tertiary sm:flex-row sm:items-center sm:justify-between">

          <p className="font-mono">
            © {year} {profile.name}
          </p>

          <p className="font-mono">
            Built with React.js · TypeScript · Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}