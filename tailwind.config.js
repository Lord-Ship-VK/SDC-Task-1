/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#0B0D12',
        surface: { DEFAULT: '#14171F', high: '#1B1F29' },
        primary: '#8AB4F8',
        secondary: '#D0A3FF',
        android: '#3DDC84',
        ink: '#E8EAF0',
        muted: '#9AA0B4',
      },
      fontFamily: {
        sans: ['Geist', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
      },
      boxShadow: {
        glass: 'inset 0 1px 0 0 rgba(255,255,255,0.12), 0 30px 80px -20px rgba(138,180,248,0.25)',
      },
    },
  },
  plugins: [],
}
