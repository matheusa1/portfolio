/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		screens: {
			'3xl': { max: '1730px' },
			// => @media (max-width: 1730px) { ... }

			'2xl': { max: '1535px' },
			// => @media (max-width: 1535px) { ... }

			xl: { max: '1279px' },
			// => @media (max-width: 1279px) { ... }

			lg: { max: '1023px' },
			// => @media (max-width: 1023px) { ... }

			md2xl: { max: '920px' },
			// => @media (max-width: 920px) { ... }

			mdLg: { max: '820px' },
			// => @media (max-width: 820px) { ... }

			md: { max: '767px' },
			// => @media (max-width: 767px) { ... }

			sm: { max: '639px' },
			// => @media (max-width: 639px) { ... }

			xsSm: { max: '530px' },
			// => @media (max-width: 530px) { ... }

			xs: { max: '490px' },
			// => @media (max-width: 490px) { ... }
		},
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		extend: {
			colors: {
				bluePrimary: '#007CED',
				bgColor: '#222222',
				strokeBgColor: '#333333',
				strokeInputColor: '#555555',
				bgTitle: '#252525',
			},
		},
	},
	plugins: [],
}
