import { API } from "@/apis";
import { GetCreatorsRequest, GetCreatorsResponse } from "@/apis/studio/models/creators";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = GetCreatorsRequest;

type Response = ResponseEntity<GetCreatorsResponse>;

type Error = AxiosError<Response>;

export interface useQueryGetCreatorsParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetCreators = UseQueryResult<Response, Error>;

function useQueryGetCreators(params: useQueryGetCreatorsParams): UseQueryGetCreators {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.studio.creators(req),
		queryFn: async () => (await API.studio.getCreators(req)).data,
		refetchOnWindowFocus: false,
		...queryOption,
	});
}

export default useQueryGetCreators;
