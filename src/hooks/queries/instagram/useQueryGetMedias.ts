import { API } from "@/apis";
import { InstagramMediaRequest, InstagramMediaResponse } from "@/apis/instagram";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { TIME_UNIT } from "@/defines/time/constants";
import { fetchQuery } from "@/utils/react-query";
import { UseQueryResult, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = InstagramMediaRequest;

type Response = ResponseEntity<InstagramMediaResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetMediasParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetMedias = UseQueryResult<Response, Error>;

function useQueryGetMedias(params: UseQueryGetMediasParams): UseQueryGetMedias {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.instagram.medias(req),
		queryFn: async () => (await API.instagram.getMedias(req)).data,
		...queryOption,
	});
}

export function useFetchQueryGetMedias() {
	const queryClient = useQueryClient();

	return (req: Request) =>
		fetchQuery<Response>(queryClient, {
			queryKey: QUERY_KEY.instagram.medias(req),
			queryFn: async () => (await API.instagram.getMedias(req)).data,
			staleTime: 3 * TIME_UNIT.unitOfMs.asMinute,
		});
}

export default useQueryGetMedias;
