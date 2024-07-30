import { REFRESH_TOKEN_URL } from "@/apis/member";
import { AxiosInterceptorCallbacks } from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/defines/types";
import useGetAxiosTokenExpiredErrorHandler from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/hooks/useInternalAxiosResponseInterceptor/hooks/useGetAxiosTokenExpiredErrorHandler";
import useGetAxiosUnauthorizedErrorHandler from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/hooks/useInternalAxiosResponseInterceptor/hooks/useGetAxiosUnauthorizedErrorHandler";
import { AxiosResponse, HttpStatusCode } from "axios";

export type UseInternalAxiosResponseInterceptor = AxiosInterceptorCallbacks<AxiosResponse>;

export default function useInternalAxiosResponseInterceptor(): UseInternalAxiosResponseInterceptor {
	const getUnauthorizedErrorHandler = useGetAxiosUnauthorizedErrorHandler();
	const getTokenExpiredErrorHandler = useGetAxiosTokenExpiredErrorHandler();

	return {
		getFulfilledHandler: () => (response) => response,
		getRejectedHandler: (params) => {
			const handleUnauthorizedError = getUnauthorizedErrorHandler(params)!;
			const handleTokenExpiredError = getTokenExpiredErrorHandler(params)!;

			return (error) => {
				const requestURL = error?.config?.url;
				console.error(`On Axios Response at ${requestURL}\n`, error.response?.data);

				const isRefreshTokenRequest = requestURL?.includes(REFRESH_TOKEN_URL);

				switch (error.response?.data?.statusCode) {
					case HttpStatusCode.Unauthorized:
						if (isRefreshTokenRequest) {
							return handleUnauthorizedError(error);
						}
						return handleTokenExpiredError(error);

					default:
						break;
				}

				return Promise.reject(error);
			};
		},
	};
}
