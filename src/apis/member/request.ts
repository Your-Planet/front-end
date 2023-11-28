import { AxiosApi, AxiosRequestFunction } from "@/defines/apis/types";
import { RegisterRequest, RegisterResponse } from "@/apis/member/models";

export const memberApi: AxiosApi = (axiosInstance, baseUrl) => {
	const getUrl = (url: string) => `${baseUrl}${url}`;

	const register: AxiosRequestFunction<RegisterRequest, RegisterResponse> = async (req, config) => {
		return (await axiosInstance.post(getUrl("/register"), req, config)).data;
	};

	return {
		register,
	};
};
