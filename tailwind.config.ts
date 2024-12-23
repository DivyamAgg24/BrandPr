import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			navbarBackground: '#FFFFFF0F',
  			blue: '#1fb6ff',
  			navbarBorder: '#FFFFFF4A'
  		},
  		fontFamily: {
  			satoshi: [
  				'Satoshi',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
        animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        },
        keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
