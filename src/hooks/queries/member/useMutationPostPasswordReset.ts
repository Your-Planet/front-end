import { API } from "@/apis";
import { ResetPasswordRequest, ResetPasswordResponse } from "@/apis/member/models/reset-pw";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = ResetPasswordRequest;

type Response = ResponseEntity<ResetPasswordResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostPasswordResetParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostPasswordReset = UseMutationResult<Response, Error, Request>;

function useMutationPostPasswordReset(params: UseMutationPostPasswordResetParams): UseMutationPostPasswordReset {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.resetPassword(req)).data,
		...mutationOption,
	});
}

export default useMutationPostPasswordReset;
