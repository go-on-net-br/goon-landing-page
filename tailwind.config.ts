import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: '#003EF9',
      secondary: '#F8F8F8',
      white: "#FFF"
    },
    extend: {},
  },
} satisfies Config
