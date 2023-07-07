/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./styles/*.{scss,sass}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main:  '#4123d7',
          disabled: '#dadadab7',
          hovered: '#3212d4',
          gradient: {
            main: '#813eda',
            hovered: '#752cd4'
          },
          background: '#f0f2fc',
        },
        secondary: {
          main: '#9a9a9a',
          background: '#fff'
        },
        facebook: {
          main: '#4267b2',
          hovered: '#0c43b2'
        },
        google: {
          main: '#db4537',
          hovered: '#c42e21'
        }
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}

