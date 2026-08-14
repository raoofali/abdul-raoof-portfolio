import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profile } from '@/data/profile';
import { EditorWindow } from '@/components/ui/EditorWindow';

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-10">

        {/* LEFT CONTENT */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-raised px-3 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-green opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-green" />
            </span>

            <span className="font-mono text-xs text-ink-secondary">
              Available for opportunities
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
className="font-display text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl"          >
            {profile.name}

            <span className="mt-2 block font-display text-2xl font-semibold text-ink-secondary sm:text-3xl">
              {profile.title}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-6 max-w-lg text-lg text-ink-secondary"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-4 flex items-center gap-2 font-mono text-sm text-ink-tertiary"
          >
            <MapPin size={14} />
            {profile.location}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-white shadow-glow transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-dim"
            >
              View Projects <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-bg-raised px-5 py-2.5 font-mono text-sm font-medium text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/50"
            >
              Get in touch
            </Link>
          </motion.div>
        </div>

        {/* RIGHT HERO VISUAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative flex min-h-[520px] flex-col items-center justify-start"
        >

          {/* Subtle background glow */}
          <div
            className="pointer-events-none absolute left-1/2 top-16 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
          />

          {/* PROFILE IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10"
          >
            <div className="relative h-72 w-72 overflow-hidden rounded-full border border-border shadow-card sm:h-80 sm:w-80">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="h-full w-full object-cover scale-[1.08]"
              />
            </div>
          </motion.div>

          {/* CODE EDITOR */}
          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-20 -mt-10 w-[92%] max-w-lg"
          >
            <EditorWindow />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}