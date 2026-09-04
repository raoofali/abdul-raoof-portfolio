import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

interface RotatingTextProps {
  words: string[];
  className?: string;
  /** ms each word stays visible before crossfading to the next */
  interval?: number;
}

/**
 * Crossfades between words in place, on a timer. Used for the hero
 * subtitle so it cycles through profile.titles instead of showing only
 * the first one — that array already existed in data/profile.ts and was
 * unused. Falls back to a single static word for reduced-motion users.
 */
export function RotatingText({ words, className, interval = 2200 }: RotatingTextProps) {
  const [index, setIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (prefersReduced || words.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, interval);
    return () => clearInterval(id);
  }, [words.length, interval, prefersReduced]);

  const current = words[prefersReduced ? 0 : index];

  return (
    <span
      className={className}
      // Announce the change politely without spamming screen readers on every tick
      aria-live="off"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={prefersReduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReduced ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
