import { API } from "@/apis";
import { GetPriceRequest, GetPriceResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError, HttpStatusCode } from "axios";

type Request = GetPriceRequest;

type Response = ResponseEntity<GetPriceResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetPriceParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetPrice = UseQueryResult<Response, Error>;

function useQueryGetPrice(params: UseQueryGetPriceParams): UseQueryGetPrice {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.studio.price(),
		queryFn: async () => {
			try {
				const priceTempData = await API.studio.getPriceTemp(req);

				return priceTempData.data;
			} catch (err) {
				const axiosError = err as AxiosError<Response>;

				if (axiosError.response && axiosError.response.status === HttpStatusCode.NotFound) {
					try {
						const priceData = await API.studio.getPrice(req);

						return priceData.data;
					} catch (err) {
						return {} as Response;
					}
				}

				return {} as Response;
			}
		},
		refetchOnWindowFocus: false,
		...queryOption,
	});
}

export default useQueryGetPrice;
