import { API } from "@/apis";
import { CreatorJoinRequest, JoinResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = CreatorJoinRequest;

type Response = ResponseEntity<JoinResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostCreatorJoinParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostCreatorJoin = UseMutationResult<Response, Error, Request>;

function useMutationPostCreatorJoin(params: UseMutationPostCreatorJoinParams): UseMutationPostCreatorJoin {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.join(req)).data,
		...mutationOption,
	});
}

export default useMutationPostCreatorJoin;
