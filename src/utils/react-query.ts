import { FetchQueryOptions, QueryClient, WithRequired } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const fetchQuery = <Response, Request = unknown>(
	queryClient: QueryClient,
	fetchQueryOptions: WithRequired<FetchQueryOptions<Request, AxiosError<Response>, Response>, "queryKey">,
) => {
	return queryClient.ensureQueryData({ ...fetchQueryOptions });
};
