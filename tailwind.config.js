const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
		"./*.html",
		'public/preline/dist/*.js',
	],
  theme: {
    extend: {
			fontFamily: {
				sans: ['General Sans', ...defaultTheme.fontFamily.sans],
				zodiak: ['Zodiak', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				cgreen: '#144D45',
				cyellow: '#FFD887',
				coklatGelap: '#A6795C',
				coklatMuda: '#BC8C6D'
			}
		},
  },
	darkMode: 'false',
  plugins: [
		require('@tailwindcss/forms'),
		require('preline/plugin'),
	],
}

