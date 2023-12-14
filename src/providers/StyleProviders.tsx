"use client";

// To use tailwind and mui together
import { ReactNode } from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

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
