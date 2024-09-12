module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        // padding: '2rem', // General padding for all screen sizes
        screens: {
          sm: '640px', // Tailwind default for small screens
          md: '768px', // Tailwind default for medium screens
          lg: '1024px', // Tailwind default for large screens
          xl: '1280px', // Tailwind default for extra-large screens
          '2xl': '1536px', // New breakpoint for 2xl screens (wider than 1440px)
          '3xl': '1920px', // Additional breakpoint for 1920px+ screens
          '4xl': '2560px', // Additional breakpoint for 4K screens
        },
      },
      gridTemplateColumns: {
        // Add a 14-column grid
        14: 'repeat(14, minmax(0, 1fr))',
      },
      screens: {
        '2xl': '1536px', // Extend existing 2xl
        '3xl': '1920px', // New breakpoint for screens wider than 1920px
        '4xl': '2560px', // New breakpoint for screens wider than 2560px
      },
      boxShadow: {
        l: '0 4px 4px 0 rgba(0,0,0,0)',
      },
      colors: {
        'light-blue': '#DAE4F9',
        'light-blue-stroke': '#80AFF9',
        'main-blue': '#1461DB',
        'gradi-blue': '#4E8CE2',
        'blue-gradient': '#508CEB',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
