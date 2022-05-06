const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				main: 'var(--main-color)', // Background
				primary: 'var(--primary-color)', // Primary
				secondary: 'var(--secondary-color)', // Secondary
			},
			fontFamily: {
				sans: ['Commissioner', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	plugins: [],
};
