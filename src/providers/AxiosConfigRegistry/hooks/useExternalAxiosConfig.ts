import { AxiosInstance } from "axios";
import { useEffect } from "react";

export default function useExternalAxiosConfig(axiosInstances: AxiosInstance[]) {
	useEffect(() => {
		axiosInstances.forEach((axiosInstance) => {
			axiosInstance.interceptors.response.use(
				(response) => response,
				(error) => {
					return Promise.reject(error);
				},
			);
		});
	}, []);
}
