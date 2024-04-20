import { API } from "@/apis";
import { FindPasswordRequest, FindPasswordResponse } from "@/apis/member/models/find";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = FindPasswordRequest;

type Response = ResponseEntity<FindPasswordResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostPasswordFindParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostPasswordFind = UseMutationResult<Response, Error, Request>;

function useMutationPostPasswordFind(params: UseMutationPostPasswordFindParams): UseMutationPostPasswordFind {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.findPassword(req)).data,
		...mutationOption,
	});
}

export default useMutationPostPasswordFind;
