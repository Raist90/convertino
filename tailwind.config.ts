import type { Config } from 'tailwindcss'

export default {
  content: ['./{pages,layouts,components,src}/**/*.{html,js,jsx,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-primary': '#1b1b1b',
      },
    },
  },
  plugins: [],
} satisfies Config
