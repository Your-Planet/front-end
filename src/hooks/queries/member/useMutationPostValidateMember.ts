import { API } from "@/apis";
import { ValidateMemberRequest, ValidateMemberResponse } from "@/apis/member/models/validate";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = ValidateMemberRequest;

type Response = ResponseEntity<ValidateMemberResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostValidateMemberParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostValidateMember = UseMutationResult<Response, Error, Request>;

function useMutationPostValidateMember(params: UseMutationPostValidateMemberParams): UseMutationPostValidateMember {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.validateMember(req)).data,
		...mutationOption,
	});
}

export default useMutationPostValidateMember;
