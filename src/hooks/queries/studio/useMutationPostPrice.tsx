import { API } from "@/apis";
import { PostPriceRequest, PostPriceResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = PostPriceRequest;

type Response = ResponseEntity<PostPriceResponse>;

type Error = AxiosError<Response>;

export interface UseMutationPostPriceParams extends UseMutationParams<Response, Error, Request> {}

export type UseMutationPostPrice = UseMutationResult<Response, Error, Request>;

function useMutationPostPrice(params: UseMutationPostPriceParams): UseMutationPostPrice {
	const { mutationOption } = params;

	return useMutation({
		mutationFn: async (req: Request) => (await API.studio.postPrice(req)).data,
		...mutationOption,
	});
}

export default useMutationPostPrice;
