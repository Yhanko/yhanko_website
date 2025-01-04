/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FF5777",
				primaryOpacity: "rgb(255, 87, 119, 0.3)",
				secondary: "#491D8B",
				whitePrimary: "#C4C4C4",
				blackPrimary: "#1B191F",
				blackSecondary: "#1A202C"
			},
			fontFamily: {
				Montserrat: "Montserrat",
			},
		},
	},
	plugins: [],
}
