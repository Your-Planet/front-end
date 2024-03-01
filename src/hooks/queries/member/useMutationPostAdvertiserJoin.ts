import { API } from "@/apis";
import { AdvertiserJoinRequest, JoinResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = AdvertiserJoinRequest;

type Response = ResponseEntity<JoinResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostAdvertiserJoinParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostAdvertiserJoin = UseMutationResult<Response, Error, Request>;

function useMutationPostAdvertiserJoin(params: UseMutationPostAdvertiserJoinParams): UseMutationPostAdvertiserJoin {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.join(req)).data,
		...mutationOption,
	});
}

export default useMutationPostAdvertiserJoin;
