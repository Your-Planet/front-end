import { API } from "@/apis";
import { AuthorRegisterRequest, RegisterResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = AuthorRegisterRequest;

type Response = ResponseEntity<RegisterResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostAuthorRegisterParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostAuthorRegister = UseMutationResult<Response, Error, Request>;

function useMutationPostAuthorRegister(params: UseMutationPostAuthorRegisterParams): UseMutationPostAuthorRegister {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.register(req)).data,
		...mutationOption,
	});
}

export default useMutationPostAuthorRegister;
