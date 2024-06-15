import { ResponseEntity } from "@/defines/apis/types";
import {
	AxiosInterceptorCallbacks,
	AxiosInterceptorFulfilledCallback,
} from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/defines/types";
import useHandleAxiosUnauthorizedError from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/hooks/useInternalAxiosResponseInterceptor/hooks/useHandleAxiosUnauthorizedError";
import { AxiosError, AxiosResponse, HttpStatusCode } from "axios";

export type UseInternalAxiosResponseInterceptor = AxiosInterceptorCallbacks<AxiosResponse>;

export default function useInternalAxiosResponseInterceptor(): UseInternalAxiosResponseInterceptor {
	const handleUnauthorizedError = useHandleAxiosUnauthorizedError();

	const handleFulfilled: AxiosInterceptorFulfilledCallback<AxiosResponse> = (response) => response;

	const handleRejected = (error: AxiosError<ResponseEntity<unknown>>) => {
		console.error(`On Axios Response at ${error.request.path}\n`, error.response?.data);

		switch (error.response?.data?.statusCode) {
			case HttpStatusCode.Unauthorized:
				handleUnauthorizedError();
				return;

			default:
				break;
		}

		return Promise.reject(error);
	};

	return {
		handleFulfilled,
		handleRejected,
	};
}
