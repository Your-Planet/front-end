"use client";

// To use tailwind and mui together
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import "pretendard/dist/web/variable/pretendardvariable.css";
import { ReactNode } from "react";

const StyleProviders = ({ children }: { children: ReactNode }) => {
	const theme = createTheme({
		typography: {
			fontFamily: [
				"Pretendard Variable",
				"Pretendard",
				"-apple-system",
				"BlinkMacSystemFont",
				"system-ui",
				"Roboto",
				"Helvetica Neue",
				"Segoe UI",
				"Apple SD Gothic Neo",
				"Noto Sans KR",
				"Malgun Gothic",
				"Apple Color Emoji",
				"Segoe UI Emoji",
				"Segoe UI Symbol",
				"sans-serif",
			].join(","),
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
