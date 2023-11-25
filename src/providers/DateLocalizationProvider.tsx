"use client";

import { ReactNode } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export interface DateLocalizationProviderProps {
	children: ReactNode | ReactNode[];
}

function DateLocalizationProvider(props: DateLocalizationProviderProps) {
	const { children } = props;

	return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>;
}

export default DateLocalizationProvider;
