/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Paleta oficial de ORCIC
				'orcic-navy': '#0b213b',
				'orcic-navy-deep': '#041627',
				'orcic-blue': '#007bff',
				'orcic-bg': '#f8fafc',
				// Surface Hierarchy Tokens (from Design System)
				'at-surface': '#f7f9fb',
				'at-surface-low': '#f2f4f6',
				'at-surface-lowest': '#ffffff',
				'on-surface': '#191c1e',
				'on-surface-variant': '#44474c',
				'at-secondary': '#006d37',
				'at-tertiary': '#ffb961',
				'at-outline': '#c4c6cd',
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				heading: ['Manrope', 'sans-serif'],
			},
			borderRadius: {
				'3xl': '1.5rem',
				'4xl': '2rem',
				'5xl': '2.5rem',
				'6xl': '3rem',
			}
		},
	},
	plugins: [],
}

