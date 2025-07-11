/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'white' : '#edefee',
      'dark_green' : '#495e57',
      'gold' : '#f4ce14',
      'light_orange' : '#ee9972',
      'pale_orange': '#fbdabb',
      'black' : '#333333',
      'grey' : '#d9d9d9',
      'light_green': '#48742c'
    },
    fontFamily: {
      'display': ["Markazi Text", 'serif'],
      'p': ['karla', 'san-serif']
    },
    extend: {
      height: {
        'desktop_nav' : '150px',
        'desktop_btn': '80px',
        'mobile_nav' : '100px'
      },
      spacing: {
      },
      borderRadius: {
        '4xl': '8px',
      }
    }
  },
  plugins: [],
}

