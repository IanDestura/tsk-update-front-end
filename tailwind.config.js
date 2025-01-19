/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}"
  ],
  theme: {
    colors: {
      'tskmgmr': {
        '1': '#181C14',
        '2': '#3C3D37',
        '3': '#697565',
        '4': '#ECDFCC',
        '5': '#c3c8c1'
      },
    },
    extend: {
      spacing: {
        'sidebar-small': '0.9rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

