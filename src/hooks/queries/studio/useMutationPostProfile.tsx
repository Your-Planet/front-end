import { API } from "@/apis";
import { PostProfileRequest, PostProfileResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = PostProfileRequest;

type Response = ResponseEntity<PostProfileResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostProfileParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostProfile = UseMutationResult<Response, Error, Request>;

function useMutationPostProfile(params: UseMutationPostProfileParams): UseMutationPostProfile {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.studio.postProfile(req)).data,
		...mutationOption,
	});
}

export default useMutationPostProfile;
