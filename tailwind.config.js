/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				"bluePrimary": "#007CED",
				"bgColor": "#222222",
				"strokeBgColor": "#333333",
			}
		},
	},
	plugins: [],
}
