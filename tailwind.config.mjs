/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Paleta oficial de ORCIC
				'orcic-navy': '#1a2b3c',
				'orcic-navy-deep': '#041627',
				'orcic-blue': '#007bff',
				'orcic-bg': '#f8fafc',
				// Surface Hierarchy Tokens (from Design System)
				'at-surface': '#eff1f5',
				'at-surface-low': '#e2e5ec',
				'at-surface-lowest': '#ffffff',
				'on-surface': '#1a2130',
				'on-surface-variant': '#64748b',
				'at-secondary': '#21ba70',
				'at-tertiary': '#f5af4d',
				'at-outline': '#cfd4df',
			},
			boxShadow: {
				'at-ambient': '0 20px 50px -12px rgba(4, 22, 39, 0.08), 0 8px 24px -8px rgba(4, 22, 39, 0.04)',
				'at-elevated': '0 30px 60px -12px rgba(4, 22, 39, 0.12), 0 10px 30px -10px rgba(4, 22, 39, 0.06)',
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

