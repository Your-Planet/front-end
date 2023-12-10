"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export interface ReactQueryClientProviderProps {
	children: React.ReactNode | React.ReactNode[];
}

function ReactQueryClientProvider(props: ReactQueryClientProviderProps) {
	const { children } = props;
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			{children}
		</QueryClientProvider>
	);
}

export default ReactQueryClientProvider;
