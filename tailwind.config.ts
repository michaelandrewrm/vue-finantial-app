/** @type {import('tailwindcss').Config} */
module.exports = {
	plugins: [],
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		colors: {
			'primary': 'rgb(var(--color-primary, <alpha-value>))',
			'primary-light': 'rgb(var(--color-primary-light, <alpha-value>))',
			'primary-dark': 'rgb(var(--color-primary-dark, <alpha-value>))',
			'primary-details': 'rgb(var(--color-primary-details, <alpha-value>))',
			'secondary': 'rgb(var(--color-secondary, <alpha-value>))',
			'secondary-light': 'rgb(var(--color-secondary-light, <alpha-value>))',
			'secondary-dark': 'rgb(var(--color-secondary-dark, <alpha-value>))',
			'secondary-extra-light': 'rgb(var(--color-secondary-extra-light, <alpha-value>))',
			'secondary-details': 'rgb(var(--color-secondary-details, <alpha-value>))',
			'surface': 'rgb(var(--color-surface, <alpha-value>))',
			'surface-dark': 'rgb(var(--color-surface-dark, <alpha-value>))',
			'surface-light': 'rgb(var(--color-surface-light, <alpha-value>))',
			'error': 'rgb(var(--color-error, <alpha-value>))',
			'success': 'rgb(var(--color-success, <alpha-value>))',
			'warning': 'rgb(var(--color-warning, <alpha-value>))',
			'accent': 'rgb(var(--color-accent, <alpha-value>))',
			'disabled': 'rgb(var(--color-disabled, <alpha-value>))',
		},
		extend: {},
	},
};
