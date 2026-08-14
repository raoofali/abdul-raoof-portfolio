import { useEffect, useState } from 'react';
import { profile } from '@/data/profile';

const lines = [
  { n: 1, code: [{ t: 'kw', v: 'import' }, { t: 'p', v: ' { ' }, { t: 'var', v: 'Developer' }, { t: 'p', v: ' } ' }, { t: 'kw', v: 'from' }, { t: 'str', v: " './abdul-raoof'" }, { t: 'p', v: ';' }] },
  { n: 2, code: [] },
  { n: 3, code: [{ t: 'kw', v: 'const' }, { t: 'var', v: ' stack' }, { t: 'p', v: ' = [' }] },
  { n: 4, code: [{ t: 'str', v: "  'React.js'" }, { t: 'p', v: ',' }] },
  { n: 5, code: [{ t: 'str', v: "  'Node.js'" }, { t: 'p', v: ',' }] },
  { n: 6, code: [{ t: 'str', v: "  'MongoDB'" }, { t: 'p', v: ',' }] },
  { n: 7, code: [{ t: 'str', v: "  'TypeScript'" }, { t: 'p', v: ',' }] },
  { n: 8, code: [{ t: 'p', v: '];' }] },
  { n: 9, code: [] },
  { n: 10, code: [{ t: 'kw', v: 'export default function' }, { t: 'fn', v: ' Developer' }, { t: 'p', v: '() {' }] },
  { n: 11, code: [{ t: 'kw', v: '  return' }, { t: 'p', v: ' <' }, { t: 'tag', v: 'Engineer' }] },
  { n: 12, code: [{ t: 'attr', v: '    name' }, { t: 'p', v: '=' }, { t: 'str', v: '"Abdul Raoof"' }] },
  { n: 13, code: [{ t: 'attr', v: '    role' }, { t: 'p', v: '=' }, { t: 'str', v: '"Full Stack MERN Dev"' }] },
  { n: 14, code: [{ t: 'attr', v: '    available' }, { t: 'p', v: '={' }, { t: 'kw', v: 'true' }, { t: 'p', v: '}' }] },
  { n: 15, code: [{ t: 'p', v: '  />;' }] },
  { n: 16, code: [{ t: 'p', v: '}' }] },
];

const tokenColor: Record<string, string> = {
  kw: 'text-accent',
  var: 'text-ink',
  p: 'text-ink-tertiary',
  str: 'text-signal-green',
  fn: 'text-cyan',
  tag: 'text-cyan',
  attr: 'text-ink-secondary',
};

export function EditorWindow() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const timeout = setTimeout(() => setVisibleLines((v) => v + 1), 90);
    return () => clearTimeout(timeout);
  }, [visibleLines]);

  return (
    <div className="card-surface w-full overflow-hidden" role="img" aria-label={`Code editor showing ${profile.name}'s stack`}>
      {/* Tab bar */}
      <div className="flex items-center gap-2 border-b border-border bg-bg-elevated px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-ink-tertiary">abdul-raoof.tsx</span>
      </div>

      {/* Code body */}
      <div className="overflow-x-auto p-5 font-mono text-[13px] leading-6 sm:text-sm">
        {lines.slice(0, visibleLines).map((line) => (
          <div key={line.n} className="flex gap-4">
            <span className="select-none text-ink-tertiary/60">
              {String(line.n).padStart(2, '0')}
            </span>
            <span className="whitespace-pre">
              {line.code.map((tok, i) => (
                <span key={i} className={tokenColor[tok.t]}>
                  {tok.v}
                </span>
              ))}
              {line.n === Math.min(visibleLines, lines.length) && (
                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
