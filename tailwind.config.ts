import type { Config } from "tailwindcss";

export default {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: '#704EE7',
        'secondary-2': '#F3F3F3',
        accent: '#DFC8FE',
        'accent-1': '#FFD35E',
      },
    },
  },
  plugins: [],
} satisfies Config;
