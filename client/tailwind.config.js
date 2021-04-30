module.exports = {
	purge: {
		content: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx", "./src/**/*.ts", "./src/**/*.tsx", "./public/index.html"]
	},
	darkMode: "class",
	theme: {
		colors: {
			red: "#e63e2c",
			green: "#23cf79",
			gray: "#D1D5DB",
			white: "#FFFFFF",
			dark: "#202020",
			darker: "#111111",
			darkest: "#0C0C0C",
			light: "#EDECE9",
			lighter: "#F3F4F6",
			lightest: "#F9FAFB"
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
