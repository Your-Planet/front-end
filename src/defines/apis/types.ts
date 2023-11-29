import { AxiosRequestConfig, AxiosResponse } from "axios";

export type AxiosRequestFunction<Req, Res> = (req: Req, config?: AxiosRequestConfig) => Promise<AxiosResponse<Res>>;
