import { API } from "@/apis";
import { JoinResponse, MemberDetailRequest, MemberDetailResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { QUERY_KEY } from "@/defines/react-query/constants";
import { UseQueryParams } from "@/defines/react-query/types";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = MemberDetailRequest;

type Response<T extends JoinResponse> = ResponseEntity<MemberDetailResponse<T>>;

type Error<T extends JoinResponse> = AxiosError<Response<T>>;

export interface UseQueryGetDetailParams<T extends JoinResponse>
	extends UseQueryParams<Response<T>, Error<T>, Request> {}

export type UseQueryGetDetail<T extends JoinResponse> = UseQueryResult<Response<T>, Error<T>>;

function useQueryGetDetail<T extends JoinResponse>(params: UseQueryGetDetailParams<T>): UseQueryGetDetail<T> {
	const { queryOption } = params;

	return useQuery({
		queryKey: QUERY_KEY.member.detail(),
		queryFn: async () => (await API.member.detail()).data,
		...queryOption,
	});
}

export default useQueryGetDetail;
