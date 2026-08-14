/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base surfaces — deep cool charcoal, never pure black
        bg: {
          DEFAULT: '#0A0D12',
          raised: '#10141B',
          elevated: '#161B24',
        },
        border: {
          DEFAULT: '#20262F',
          soft: '#191E26',
        },
        ink: {
          DEFAULT: '#EAEDF2',
          secondary: '#93A0B4',
          tertiary: '#5B6472',
        },
        accent: {
          DEFAULT: '#3E7BFA',
          dim: '#2C5BC7',
          soft: 'rgba(62, 123, 250, 0.12)',
          glow: 'rgba(62, 123, 250, 0.35)',
        },
        cyan: {
          DEFAULT: '#22D3EE',
        },
        signal: {
          green: '#3ECF8E',
          amber: '#F5A524',
        },
      },
    fontFamily: {
  sans: ['Inter', 'sans-serif'],
  display: ['Manrope', 'sans-serif'],
  mono: ['JetBrains Mono', 'monospace'],
},
      backgroundImage: {
        'grid-fade':
          'linear-gradient(to bottom, rgba(62,123,250,0.08), transparent 60%)',
        'radial-glow':
          'radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(62,123,250,0.15), transparent 40%)',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(62,123,250,0.25), 0 8px 40px -8px rgba(62,123,250,0.35)',
        card: '0 1px 0 rgba(255,255,255,0.03) inset, 0 20px 40px -20px rgba(0,0,0,0.5)',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      keyframes: {
        blink: {
          '0%, 49%': { opacity: '1' },
          '50%, 100%': { opacity: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
