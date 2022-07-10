/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				kuro: {
					50: '#f1f1f1',
          100: '#eaeaeb',
          200: '#d6d6d7',
          300: '#c1c1c4',
          400: '#a3a3a6',
          500: '#6f6f74',
          600: '#46464d',
          700: '#313136',
          800: '#232327',
          900: '#151517',

				}
			}
		},
	},
	plugins: [],
	darkMode: "class"
}
