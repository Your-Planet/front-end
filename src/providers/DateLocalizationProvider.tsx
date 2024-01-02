"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReactNode } from "react";

export interface DateLocalizationProviderProps {
	children: ReactNode | ReactNode[];
}

function DateLocalizationProvider(props: DateLocalizationProviderProps) {
	const { children } = props;

	return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>;
}

export default DateLocalizationProvider;
