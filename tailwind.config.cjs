/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#3696d7',
				secondary: '#329bd4',
				dark: '#030304',
				stone: '#ebf3f3'

			}
		},
	},
	plugins: [],
}
