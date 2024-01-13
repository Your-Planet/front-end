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
					to: { opacity: "0", top: "50px" },
				},
			},
		},
	},
	plugins: [require("tailwindcss-3d")],
	corePlugins: {
		preflight: false,
	},
};

export default config;
