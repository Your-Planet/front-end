import { API } from "@/apis";
import { LoginRequest, LoginResponse } from "@/apis/auth/models/login";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = LoginRequest;

type Response = ResponseEntity<LoginResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostLoginParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostLogin = UseMutationResult<Response, Error, Request>;

function useMutationPostLogin(params: UseMutationPostLoginParams): UseMutationPostLogin {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.auth.login(req)).data,
		...mutationOption,
	});
}

export default useMutationPostLogin;
