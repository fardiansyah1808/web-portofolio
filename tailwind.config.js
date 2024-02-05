/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.5em',
      }
    },
  },
  plugins: [],
}

