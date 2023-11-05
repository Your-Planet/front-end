"use client";

// To use tailwind and mui together
import React from "react";
import { CssBaseline, StyledEngineProvider } from "@mui/material";

const StyleProviders = ({ children }: { children: React.ReactNode }) => {
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
