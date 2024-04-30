import { API } from "@/apis";
import { InstagramPostRequest, InstagramPostResponse } from "@/apis/instagram";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
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

export default useQueryGetPosts;
