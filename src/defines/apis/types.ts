import { AxiosRequestConfig, AxiosResponse, HttpStatusCode } from "axios";

export interface ResponseEntity<T> {
	data: T;
	// @ts-ignore
	statusCode: HttpStatusCode;
	message: string;
}

export type AxiosRequestFunction<Req, Res> = (req: Req, config?: AxiosRequestConfig) => Promise<AxiosResponse<Res>>;

export type AxiosRequestYourPlanetFunction<Req, Res> = AxiosRequestFunction<Req, ResponseEntity<Res>>;
