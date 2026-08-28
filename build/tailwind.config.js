module.exports = {
  content: ["../index.html", "../dryice-cleaning.html"],
  safelist: [
    'shadow-[0_-8px_30px_rgba(0,0,0,0.12)]',
    'shadow-[0_6px_16px_rgba(0,0,0,0.12)]',
    'text-[clamp(0.8rem,2.8vw,1.35rem)]',
    'text-[clamp(0.95rem,3.8vw,1.35rem)]',
  ],
  theme: {
    extend: {
      colors: {
        // NOTE: do not name a custom color "base" (or any reserved Tailwind
        // font-size scale key: xs/sm/base/lg/xl/2xl.../9xl) — it silently
        // collides with the built-in `text-base` (and `sm:text-base` etc.)
        // font-size utility and Tailwind emits a bogus color rule for the
        // exact same selector, which wins the cascade at that breakpoint.
        // This caused real invisible/white text bugs; use "white" instead.
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
