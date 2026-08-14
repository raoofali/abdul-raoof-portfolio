import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border bg-bg-elevated px-2.5 py-1 font-mono text-xs text-ink-secondary',
        className
      )}
    >
      {children}
    </span>
  );
}
