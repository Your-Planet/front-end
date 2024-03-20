import { API } from "@/apis";
import { MeRequest, MeResponse } from "@/apis/instagram-graph";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = MeRequest;

type Response = MeResponse;

type Error = AxiosError<Response>;

export interface UseQueryGetMeParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetMe = UseQueryResult<Response, Error>;

function useQueryGetMe(params: UseQueryGetMeParams): UseQueryGetMe {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.instagramGraph.me(req),
		queryFn: async () => (await API.instagramGraph.me(req)).data,
		refetchOnWindowFocus: false,
		...queryOption,
	});
}

export default useQueryGetMe;
