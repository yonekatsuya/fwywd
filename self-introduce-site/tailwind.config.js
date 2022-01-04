module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-about': "url('/image/bg-about.png')",
        'bg-skills': "url('/image/bg-skills.png')",
        'bg-future': "url('/image/bg-future.png')",
        'future': "url('/image/future.png')",
      },
      colors: {
        'text-green': '#008c8d',
        'thin-green': '#c5eaea',
        'dark-green': '#2bb9ba',
        'footer-black': '#262c3a',
        'header-green': '#6bc2c3'
      },
    },
  },
  plugins: [],
};
