import { API } from "@/apis";
import { PostPriceTempRequest, PostPriceTempResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = PostPriceTempRequest;

type Response = ResponseEntity<PostPriceTempResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostPriceTempParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostPriceTemp = UseMutationResult<Response, Error, Request>;

function useMutationPostPriceTemp(params: UseMutationPostPriceTempParams): UseMutationPostPriceTemp {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.studio.postPriceTemp(req)).data,
		...mutationOption,
	});
}

export default useMutationPostPriceTemp;
