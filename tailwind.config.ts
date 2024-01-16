import type { Config } from "tailwindcss";
import { HEADER_HEIGHT } from "./src/components/common/layout/Header/defines/constants";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	important: true,
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			height: {
				"except-header": `calc(100vh - ${HEADER_HEIGHT}px)`,
			},
			keyframes: {
				wheel: {
					to: { opacity: "0", transform: "translateY(40px)" },
				},
				fadeIn: {
					"0%": {
						opacity: "0",
					},
					"50%": {
						opacity: "0",
					},
					"100%": {
						opacity: "1",
					},
				},
				slide: {
					"0%": {
						transform: "translateX(0)",
					},
					"100%": {
						transform: "translateX(-100%)",
					},
				},
			},
			animation: {
				wheel: "wheel 2s infinite",
				fadeIn: "fadeIn 3s ease-in-out",
				slide: "slide 35s linear infinite",
			},
		},
	},

	plugins: [require("tailwindcss-3d"), require("tailwindcss-animated")],
	corePlugins: {
		preflight: false,
	},
};

export default config;
