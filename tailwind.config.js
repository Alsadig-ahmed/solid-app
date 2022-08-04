/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '460px',
      md: '768px',
      lg: '1024px',
    },
    colors: ({ colors }) => ({
      inherit: colors.inherit,
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      slate: colors.slate,
      zinc: colors.zinc,
      emerald: colors.emerald,
    }),
    extend: {},
  },
  plugins: [],
};
