import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page not found</title>
      </Helmet>
      <section className="flex min-h-[70vh] items-center justify-center py-24">
        <div className="container-page text-center">
          <p className="font-mono text-sm text-accent">404</p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
            <span className="font-mono text-ink-tertiary">Error:</span> Page not found
          </h1>
          <p className="mt-4 text-ink-secondary">
            The page you're looking for doesn't exist or was moved.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-dim"
          >
            <ArrowLeft size={16} /> Back home
          </Link>
        </div>
      </section>
    </>
  );
}
