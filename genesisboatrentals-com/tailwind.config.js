/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				prata: ["Prata", "sans-serif"],
			},
			colors: {
				primary: "#f05c07",
				secondary: "#1F2937",
			},
		},
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1540px",
		},
	},
	plugins: [],
};
