module.exports = {
  content: ["../index.html"],
  safelist: [
    'shadow-[0_-8px_30px_rgba(0,0,0,0.12)]',
    'shadow-[0_6px_16px_rgba(0,0,0,0.12)]',
    'text-[clamp(0.8rem,2.8vw,1.35rem)]',
    'text-[clamp(0.95rem,3.8vw,1.35rem)]',
  ],
  theme: {
    extend: {
      colors: {
        base: '#FFFFFF',
        main: '#D6303E',
        sub: '#1D3557',
        accent: '#FFB703',
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'sans-serif'],
      },
    },
  },
}
