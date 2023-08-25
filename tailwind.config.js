/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // using ./src/ dir
    "./src/**/*.{js,ts,jsx,tsx}",
    // using ./ dir
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // add more paths here
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
