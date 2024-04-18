import { API } from "@/apis";
import { FindEmailRequest, FindEmailResponse } from "@/apis/member/models/find";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = FindEmailRequest;

type Response = ResponseEntity<FindEmailResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostEmailFindParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostEmailFind = UseMutationResult<Response, Error, Request>;

function useMutationPostEmailFind(params: UseMutationPostEmailFindParams): UseMutationPostEmailFind {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.findEmail(req)).data,
		...mutationOption,
	});
}

export default useMutationPostEmailFind;
