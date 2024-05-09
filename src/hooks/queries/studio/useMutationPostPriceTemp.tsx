import { API } from "@/apis";
import { PostPriceRequest, PostPriceResponse } from "@/apis/studio";
import { ResponseEntity } from "@/defines/apis/types";
import { UseMutationParams } from "@/defines/react-query/types";
import { UseMutationResult, useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

type Request = PostPriceRequest;

type Response = ResponseEntity<PostPriceResponse>;

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
