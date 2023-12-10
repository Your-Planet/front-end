"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface ReactQueryClientProviderProps {
	children: React.ReactNode | React.ReactNode[];
}

function ReactQueryClientProvider(props: ReactQueryClientProviderProps) {
	const { children } = props;
	const queryClient = new QueryClient();

	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default ReactQueryClientProvider;
