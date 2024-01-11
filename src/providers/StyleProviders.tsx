"use client";

// To use tailwind and mui together
import { CssBaseline, StyledEngineProvider } from "@mui/material";
import { ReactNode } from "react";

const StyleProviders = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<StyledEngineProvider injectFirst>
				<CssBaseline />
				{children}
			</StyledEngineProvider>
		</>
	);
};
export default StyleProviders;
