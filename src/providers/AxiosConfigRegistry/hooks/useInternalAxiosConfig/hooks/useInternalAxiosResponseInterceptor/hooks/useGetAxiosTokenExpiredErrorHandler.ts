import { API } from "@/apis";
import { COOKIE } from "@/defines/cookie/constants";
import {
	AxiosInterceptorRejectedHandler,
	GetAxiosInterceptorHandler,
} from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/defines/types";
import { setCookie } from "@/utils/cookie";
import { InternalAxiosRequestConfig } from "axios";

export default function useGetAxiosTokenExpiredErrorHandler(): GetAxiosInterceptorHandler<AxiosInterceptorRejectedHandler> {
	const setRefreshedAccessToken = async () => {
		const {
			data: { data: accessToken },
		} = await API.member.refreshToken();
		setCookie(COOKIE.accessToken, accessToken);
	};

	return ({ refreshTokenPromiseRef, axiosInstance }) => {
		const requestRefreshToken = async (config: InternalAxiosRequestConfig) => {
			if (!refreshTokenPromiseRef.current) {
				// eslint-disable-next-line no-param-reassign
				refreshTokenPromiseRef.current = setRefreshedAccessToken();
			}

			try {
				await refreshTokenPromiseRef.current;
				// eslint-disable-next-line no-param-reassign
				refreshTokenPromiseRef.current = null;

				return await axiosInstance(config);
			} catch (e) {
				// eslint-disable-next-line no-param-reassign
				refreshTokenPromiseRef.current = null;

				return Promise.reject(e);
			}
		};

		return (error) => requestRefreshToken(error.config!);
	};
}
