import useInternalAxiosRequestInterceptor from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/hooks/useInternalAxiosRequestInterceptor";
import useInternalAxiosResponseInterceptor from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/hooks/useInternalAxiosResponseInterceptor";
import { AxiosInstance } from "axios";
import { useEffect } from "react";

export default function useInternalAxiosConfig(axiosInstances: AxiosInstance[]) {
	const { handleFulfilled: handleRequestFulfilled, handleRejected: handleRequestRejected } =
		useInternalAxiosRequestInterceptor();
	const { handleFulfilled: handleResponseFulfilled, handleRejected: handleResponseRejected } =
		useInternalAxiosResponseInterceptor();

	useEffect(() => {
		axiosInstances.forEach((axiosInstance) => {
			axiosInstance.interceptors.request.use(handleRequestFulfilled, handleRequestRejected);
			axiosInstance.interceptors.response.use(handleResponseFulfilled, handleResponseRejected);
		});
	}, [axiosInstances]);
}
