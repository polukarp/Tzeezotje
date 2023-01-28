/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['../src/*.{html,js}'],
	theme: {
		extend: {
			maxWidth: {
				'screen-3xl': '1920px',
				content: '1170px',
			},
			colors: {
				primary: '#FFFFFF',
				secondary: '#3A4574',
				secondaryHover: '#2E3A5F',
				accent: '#D3B47F',

				typography: {
					primary: '#FFFFFF',
					primaryHover: '#E5E5E5',
					contrast: '#000000',
				},
			},
			height: {
				'hero-image': '901px',
			},
		},
	},
	plugins: [],
};
