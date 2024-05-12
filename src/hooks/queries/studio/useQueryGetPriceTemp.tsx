import { API } from "@/apis";
import { GetPriceTempRequest, GetPriceTempResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = GetPriceTempRequest;

type Response = ResponseEntity<GetPriceTempResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetPriceTempParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetPriceTemp = UseQueryResult<Response, Error>;

function useQueryGetPriceTemp(params: UseQueryGetPriceTempParams): UseQueryGetPriceTemp {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.studio.price(),
		queryFn: async () => (await API.studio.getPriceTemp(req)).data,
		refetchOnWindowFocus: false,
		...queryOption,
	});
}

export default useQueryGetPriceTemp;
