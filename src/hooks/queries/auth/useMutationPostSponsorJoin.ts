import { API } from "@/apis";
import { JoinResponse, SponsorJoinRequest } from "@/apis/auth";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = SponsorJoinRequest;

type Response = ResponseEntity<JoinResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostSponsorJoinParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostSponsorJoin = UseMutationResult<Response, Error, Request>;

function useMutationPostSponsorJoin(params: UseMutationPostSponsorJoinParams): UseMutationPostSponsorJoin {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.auth.join(req)).data,
		...mutationOption,
	});
}

export default useMutationPostSponsorJoin;
