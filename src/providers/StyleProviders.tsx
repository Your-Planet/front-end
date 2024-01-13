"use client";

// To use tailwind and mui together
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";

const StyleProviders = ({ children }: { children: ReactNode }) => {
	const theme = createTheme({
		typography: {
			fontFamily: `"Pretendard-Regular"`,
		},
	});

	return (
		<StyledEngineProvider injectFirst>
			<CssBaseline />
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default StyleProviders;
