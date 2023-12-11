import { UseMutationParams } from "@/defines/react-query/types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { RegisterRequest, RegisterResponse } from "@/apis/member";
import { API } from "@/apis";
import { ResponseEntity } from "@/defines/apis/types";

type Request = RegisterRequest;

type Response = ResponseEntity<RegisterResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostRegisterParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostRegister = UseMutationResult<Response, Error, Request>;

function useMutationPostRegister(params: UseMutationPostRegisterParams): UseMutationPostRegister {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.register(req)).data,
		...mutationOption,
	});
}

export default useMutationPostRegister;
