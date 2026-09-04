import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

/**
 * Wraps <App /> in main.tsx. Without this, any unhandled render error in
 * production shows visitors a completely blank white page with no way to
 * recover — the worst possible first impression on a portfolio site.
 */
export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    // Swap for a real error-tracking call (Sentry, etc.) if you add one later.
    console.error('Uncaught error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center text-ink">
          <h1 className="font-display text-2xl font-semibold">Something went wrong</h1>
          <p className="mt-2 max-w-sm text-ink-secondary">
            This page hit an unexpected error. Refreshing usually fixes it.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 rounded-md bg-accent px-5 py-2.5 font-mono text-sm font-medium text-white shadow-glow transition-all hover:-translate-y-0.5 hover:bg-accent-dim"
          >
            Reload page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
