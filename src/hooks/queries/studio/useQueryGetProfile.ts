import { API } from "@/apis";
import { GetProfileRequest, GetProfileResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = GetProfileRequest;

type Response = ResponseEntity<GetProfileResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetProfileParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetProfile = UseQueryResult<Response, Error>;

function useQueryGetProfile(params: UseQueryGetProfileParams): UseQueryGetProfile {
	const { req, queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.studio.profile(),
		queryFn: async () => (await API.studio.getProfile(req)).data,
		...queryOption,
	});
}

export default useQueryGetProfile;
