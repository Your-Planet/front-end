import { API } from "@/apis";
import { MemberDetailRequest, MemberDetailResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = MemberDetailRequest;

type Response = ResponseEntity<MemberDetailResponse>;

type Error = AxiosError<Response>;

export interface UseQueryGetDetailParams extends UseQueryParams<Response, Error, Request> {}

export type UseQueryGetDetail = UseQueryResult<Response, Error>;

function useQueryGetDetail(params: UseQueryGetDetailParams): UseQueryGetDetail {
	const { queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.member.detail(),
		queryFn: async () => (await API.member.detail()).data,
		...queryOption,
	});
}

export default useQueryGetDetail;
