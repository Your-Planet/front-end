import { AxiosRequestConfig, AxiosResponse, HttpStatusCode } from "axios";

export type AxiosRequestFunction<Req, Res> = (req: Req, config?: AxiosRequestConfig) => Promise<AxiosResponse<Res>>;

export interface ResponseEntity<T> {
	data: T;
	// @ts-ignore
	status: HttpStatusCode;
	message: string;
}
