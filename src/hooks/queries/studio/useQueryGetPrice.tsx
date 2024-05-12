import { API } from "@/apis";
import { GetPriceRequest, GetPriceResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = GetPriceRequest;

type Response = ResponseEntity<GetPriceResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetPriceParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetPrice = UseQueryResult<Response, Error>;

function useQueryGetPrice(params: UseQueryGetPriceParams): UseQueryGetPrice {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.studio.price(),
		queryFn: async () => (await API.studio.getPrice(req)).data,
		refetchOnWindowFocus: false,
		...queryOption,
	});
}

export default useQueryGetPrice;
