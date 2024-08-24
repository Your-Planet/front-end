"use client";

import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { ReactNode } from "react";

export interface DateLocalizationProviderProps {
	children: ReactNode | ReactNode[];
}

dayjs.extend(utc);
dayjs.extend(timezone);

function DateLocalizationProvider(props: DateLocalizationProviderProps) {
	const { children } = props;

	return <LocalizationProvider dateAdapter={AdapterDayjs}>{children}</LocalizationProvider>;
}

export default DateLocalizationProvider;
