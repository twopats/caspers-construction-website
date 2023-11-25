/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#3696d7',
				secondary: '#329bd4',
				dark: '#030304',
				stone: '#ebf3f3',
				cccgrey: '#202021'


			}
			,
			animation: {
				partners: 'carousel 10s alternate  linear infinite ',
			},
			keyframes: {
				carousel: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},

			}



		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
