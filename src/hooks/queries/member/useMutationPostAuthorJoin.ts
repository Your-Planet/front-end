import { API } from "@/apis";
import { AuthorJoinRequest, JoinResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = AuthorJoinRequest;

type Response = ResponseEntity<JoinResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostAuthorJoinParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostAuthorJoin = UseMutationResult<Response, Error, Request>;

function useMutationPostAuthorJoin(params: UseMutationPostAuthorJoinParams): UseMutationPostAuthorJoin {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.member.join(req)).data,
		...mutationOption,
	});
}

export default useMutationPostAuthorJoin;
