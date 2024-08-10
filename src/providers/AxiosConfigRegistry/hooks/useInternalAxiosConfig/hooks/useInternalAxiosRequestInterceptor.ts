import { REFRESH_TOKEN_URL } from "@/apis/auth/request";
import { HTTP_HEADER_KEY } from "@/defines/apis/constants";
import { COOKIE } from "@/defines/cookie/constants";
import { AxiosInterceptorCallbacks } from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/defines/types";
import { getCookie } from "@/utils/cookie";
import { InternalAxiosRequestConfig } from "axios";

export type UseInternalAxiosRequestInterceptor = AxiosInterceptorCallbacks<InternalAxiosRequestConfig>;

export default function useInternalAxiosRequestInterceptor(): UseInternalAxiosRequestInterceptor {
	return {
		getFulfilledHandler: ({ refreshTokenPromiseRef }) => {
			return async (config) => {
				if (refreshTokenPromiseRef.current && !config.url?.includes(REFRESH_TOKEN_URL)) {
					await refreshTokenPromiseRef.current;
				}

				const accessToken = getCookie(COOKIE.accessToken);

				const newConfig = {
					...config,
				};

				if (accessToken) {
					newConfig.headers[HTTP_HEADER_KEY.authorization] = `Bearer ${accessToken}`;
				} else {
					delete newConfig.headers[HTTP_HEADER_KEY.authorization];
				}

				return newConfig;
			};
		},
		getRejectedHandler: () => undefined,
	};
}
