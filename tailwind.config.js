/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        'bg-elevated': 'rgb(var(--bg-elevated) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        mist: 'rgb(var(--mist) / <alpha-value>)',
        nova: 'rgb(var(--nova) / <alpha-value>)',
        'nova-dim': 'rgb(var(--nova-dim) / <alpha-value>)',
        arjuna: 'rgb(var(--arjuna) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
      },
      fontFamily: {
        display: ['"Cabinet Grotesk"', 'sans-serif'],
        body: ['"Satoshi"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      maxWidth: {
        content: '1240px',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(12px,-14px)' },
        },
        spinSlow: {
          to: { transform: 'rotate(360deg)' },
        },
        spinSlowReverse: {
          to: { transform: 'rotate(-360deg)' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
      },
      animation: {
        drift: 'drift 7s ease-in-out infinite',
        spinSlow: 'spinSlow 40s linear infinite',
        spinSlowReverse: 'spinSlowReverse 60s linear infinite',
        pulseRing: 'pulseRing 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite',
      },
    },
  },
  plugins: [],
}
