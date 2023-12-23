/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./public/*.html"],
	theme: {
		extend: {
			colors: {
				"primary-blue": "#003B6D",
				"primary-lightblue": "#6699CC",
				"secondary-gray": "#676767",
				"secondary-silver": "#BDBDBD",
			},
		},
	},
	plugins: [],
};
