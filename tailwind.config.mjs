/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Paleta oficial de ORCIC
				'orcic-navy': '#0b213b',
				'orcic-blue': '#007bff',
				'orcic-bg': '#f8fafc',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Manrope', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
