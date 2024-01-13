import { API } from "@/apis";
import { AdvertiserRegisterRequest, RegisterResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = AdvertiserRegisterRequest;

type Response = ResponseEntity<RegisterResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostAdvertiserRegisterParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostAdvertiserRegister = UseMutationResult<Response, Error, Request>;

function useMutationPostAdvertiserRegister(
	params: UseMutationPostAdvertiserRegisterParams,
): UseMutationPostAdvertiserRegister {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.register(req)).data,
		...mutationOption,
	});
}

export default useMutationPostAdvertiserRegister;
