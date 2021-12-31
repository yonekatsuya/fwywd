module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-about': "url('/bg-about.png')",
        'bg-skills': "url('/bg-skills.png')",
      }
    },
  },
  plugins: [],
}
