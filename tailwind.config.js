/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // 부산 바다 톤 — 절제된 액센트로만 사용
        ocean: {
          50:  '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', 'system-ui', 'sans-serif'],
        // 학회 사이트 느낌의 세리프 헤딩
        serif: ['"Source Serif 4"', '"Source Serif Pro"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};
