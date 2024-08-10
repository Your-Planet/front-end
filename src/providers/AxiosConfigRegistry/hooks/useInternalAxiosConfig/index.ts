import useInternalAxiosRequestInterceptor from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/hooks/useInternalAxiosRequestInterceptor";
import useInternalAxiosResponseInterceptor from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/hooks/useInternalAxiosResponseInterceptor";
import { AxiosInstance } from "axios";
import { useEffect, useRef } from "react";

export default function useInternalAxiosConfig(axiosInstances: AxiosInstance[]) {
	const { getFulfilledHandler: getRequestFulfilledHandler, getRejectedHandler: getRequestRejectedHandler } =
		useInternalAxiosRequestInterceptor();
	const { getFulfilledHandler: getResponseFulfilledHandler, getRejectedHandler: getResponseRejectedHandler } =
		useInternalAxiosResponseInterceptor();

	const refreshTokenPromiseRef = useRef<Promise<void> | null>(null);

	useEffect(() => {
		axiosInstances.forEach((axiosInstance) => {
			const getHandlerParams = { refreshTokenPromiseRef, axiosInstance };

			axiosInstance.interceptors.request.use(
				getRequestFulfilledHandler(getHandlerParams),
				getRequestRejectedHandler(getHandlerParams),
			);
			axiosInstance.interceptors.response.use(
				getResponseFulfilledHandler(getHandlerParams),
				getResponseRejectedHandler(getHandlerParams),
			);
		});
	}, [axiosInstances]);
}
