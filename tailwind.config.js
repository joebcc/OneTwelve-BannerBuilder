module.exports = {
    purge: {
      content: [
      './src/**/*.html',
      './src/**/*.njk',
      './src/**/*.js',
    ],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      colors: {
        blue: {
          light: '#85d7ff',
          DEFAULT: '#5BCCF6',
          dark: '#009eeb',
        },
        gray: {
          light: '#F2F5F7',
          DEFAULT: '#9d9d9d',
          dark: '#009eeb',
        },
        red: {
          light: '#85d7ff',
          DEFAULT: '#FD2158',
          dark: '#009eeb',
        },
        yellow: {
          light: '#85d7ff',
          DEFAULT: '#F9CC56',
          dark: '#009eeb',
        },
        purple: {
          light: '#85d7ff',
          DEFAULT: '#8820FF',
          dark: '#009eeb',
        },
        white: {
          light: '#ffffff',
          DEFAULT: '#ffffff',
          dark: '#009eeb',
        },
        black: {
          light: '#111111',
          DEFAULT: '#030303',
          dark: '#000000',
        },
      },
      extend: {},
      fontFamily: {
        'sans' : ['Maison Neue Medium', 'Arial', 'Helvetica', 'sans-serif'],
        'display': ['Maison Neue Bold', 'Arial', 'Helvetica', 'sans-serif'],
        'body' : ['Maison Neue Medium', 'Arial', 'Helvetica', 'sans-serif'],
        'light' :['Maison Neue Light', 'Arial', 'Helvetica', 'sans-serif'],
      },
      filter: { // defaults to {}
        'none': 'none',
        'grayscale-100': 'grayscale(1)',
        'grayscale-50': 'grayscale(.5)',
        'grayscale-0': 'grayscale(0)',
        'saturate-100': 'saturate(1)',
        'saturate-50': 'saturate(.5)',
        'saturate-10': 'saturate(.1)',
        'saturate-0': 'saturate(0)',
        'invert': 'invert(1)',
        'sepia': 'sepia(1)',
      },
      backdropFilter: { // defaults to {}
        'none': 'none',
        'blur': 'blur(20px)',
      }
    },
    variants: {
      display: ['responsive', 'group-hover', 'group-focus'],
      filter: ['responsive', 'hover', 'group-hover'], // defaults to ['responsive']
      backdropFilter: ['responsive'], // defaults to ['responsive']
    },
    plugins: [
      require('tailwindcss-filters'),
    ],
  }