import { API } from "@/apis";
import { GetProfileRequest, GetProfileResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { useSuspenseQuery } from "@tanstack/react-query";
import { UseSuspenseQueryResult } from "@tanstack/react-query/src/types";
import { AxiosError } from "axios";

type Request = GetProfileRequest;

type Response = ResponseEntity<GetProfileResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetProfileParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetProfile = UseSuspenseQueryResult<Response, Error>;

function useQueryGetProfile(params: UseQueryGetProfileParams): UseQueryGetProfile {
	const { req, queryOption } = params;

	return useSuspenseQuery({
		queryKey: QUERY_KEY.studio.profile(),
		queryFn: async () => (await API.studio.getProfile(req)).data,
		refetchOnWindowFocus: false,
		...queryOption,
	});
}

export default useQueryGetProfile;
