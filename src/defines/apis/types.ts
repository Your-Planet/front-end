import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export type AxiosRequestFunction<Req, Res> = (req: Req, config?: AxiosRequestConfig) => Promise<AxiosResponse<Res>>;

export type AxiosApi = (
	axiosInstance: AxiosInstance,
	baseUrl: string,
) => Record<string, AxiosRequestFunction<any, any>>;
