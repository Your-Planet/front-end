import { API } from "@/apis";
import { PostMeResponse } from "@/apis/post-me/index";
import { PostMeForm as PostMeRequest } from "@/components/post-me/defines/types";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = PostMeRequest;

type Response = ResponseEntity<PostMeResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostMeParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostMe = UseMutationResult<Response, Error, Request>;

function useMutationPostMe(params: UseMutationPostMeParams): UseMutationPostMe {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.postMe.postPortfolio(req)).data,
		...mutationOption,
	});
}

export default useMutationPostMe;
