import { UseMutationParams } from "@/defines/react-query/types";
import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { ResponseEntity } from "@/defines/apis/types";
import { LoginRequest, LoginResponse } from "@/apis/member/models/login";
import { API } from "@/apis";

type Request = LoginRequest;

type Response = ResponseEntity<LoginResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostLoginParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostLogin = UseMutationResult<Response, Error, Request>;

function useMutationPostLogin(params: UseMutationPostLoginParams): UseMutationPostLogin {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.login(req)).data,
		...mutationOption,
	});
}

export default useMutationPostLogin;
