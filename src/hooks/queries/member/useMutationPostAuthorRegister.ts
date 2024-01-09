import { AxiosError } from "axios";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { UseMutationParams } from "@/defines/react-query/types";
import { AuthorRegisterRequest, RegisterResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { API } from "@/apis";

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
