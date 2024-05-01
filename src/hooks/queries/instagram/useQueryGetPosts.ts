import { API } from "@/apis";
import { InstagramPostRequest, InstagramPostResponse } from "@/apis/instagram";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { TIME_UNIT } from "@/defines/time/constants";
import { fetchQuery } from "@/utils/react-query";
import { UseQueryResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = InstagramPostRequest;

type Response = ResponseEntity<InstagramPostResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetPostsParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetPosts = UseQueryResult<Response, Error>;

function useQueryGetPosts(params: UseQueryGetPostsParams): UseQueryGetPosts {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.instagram.posts(req),
		queryFn: async () => (await API.instagram.getPosts(req)).data,
		...queryOption,
	});
}

export function useFetchQueryGetPosts() {
	const queryClient = useQueryClient();

	return (req: Request) =>
		fetchQuery<Response>(queryClient, {
			queryKey: QUERY_KEY.instagram.posts(req),
			queryFn: async () => (await API.instagram.getPosts(req)).data,
			staleTime: 3 * TIME_UNIT.unitOfMs.asMinute,
		});
}

export default useQueryGetPosts;
