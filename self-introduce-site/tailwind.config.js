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
        future: "url('/image/future.png')",
      },
    },
  },
  plugins: [],
};
