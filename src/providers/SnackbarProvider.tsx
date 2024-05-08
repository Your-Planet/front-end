"use client";

import { SnackbarProvider as NotistackSnackbarProvider } from "notistack";
import { ReactNode } from "react";

export interface SnackbarProviderProps {
	children: ReactNode;
}

function SnackbarProvider(props: SnackbarProviderProps) {
	const { children } = props;

	return <NotistackSnackbarProvider>{children}</NotistackSnackbarProvider>;
}

export default SnackbarProvider;
