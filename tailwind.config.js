module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'about-me-img': "url('/image/bg-about.png')",
        'skills-img': "url('/image/bg-skills.png')",
        'future-img': "url('/image/bg-future.png')",
        'future-card-img': "url('/image/future.png')",
      },
      colors: {
        'base-green': '#008c8d',
        'thin-green': '#c5eaea',
        'dark-green': '#2bb9ba',
        'footer-black': '#262c3a',
        'header-green': '#6bc2c3',
      },
    },
  },
};
