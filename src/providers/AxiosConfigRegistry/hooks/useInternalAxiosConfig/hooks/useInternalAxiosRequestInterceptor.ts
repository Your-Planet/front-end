import { HTTP_HEADER } from "@/defines/apis/constants";
import { COOKIE } from "@/defines/cookie/constants";
import {
	AxiosInterceptorCallbacks,
	AxiosInterceptorFulfilledCallback,
} from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/defines/types";
import { getCookie } from "@/utils/cookie";
import { InternalAxiosRequestConfig } from "axios";

export type UseInternalAxiosRequestInterceptor = AxiosInterceptorCallbacks<InternalAxiosRequestConfig>;

export default function useInternalAxiosRequestInterceptor(): UseInternalAxiosRequestInterceptor {
	const handleFulfilled: AxiosInterceptorFulfilledCallback<InternalAxiosRequestConfig> = (config) => {
		const accessToken = getCookie(COOKIE.accessToken);

		const newConfig = {
			...config,
		};

		if (accessToken) {
			newConfig.headers[HTTP_HEADER.creatorization] = `Bearer ${accessToken}`;
		} else {
			delete newConfig.headers[HTTP_HEADER.creatorization];
		}

		return newConfig;
	};

	const handleRejected = undefined;

	return {
		handleFulfilled,
		handleRejected,
	};
}
