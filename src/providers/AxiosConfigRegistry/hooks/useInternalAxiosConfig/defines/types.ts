import { ResponseEntity } from "@/defines/apis/types";
import { AxiosError, AxiosInstance } from "axios";
import { MutableRefObject } from "react";

export type GetAxiosInterceptorHandler<TInterceptorHandler extends Function> = (params: {
	refreshTokenPromiseRef: MutableRefObject<Promise<void> | null>;
	axiosInstance: AxiosInstance;
}) => TInterceptorHandler | undefined;

export type AxiosInterceptorFulfilledHandler<V> = (value: V) => V | Promise<V>;
export type AxiosInterceptorRejectedHandler = (error: AxiosError<ResponseEntity<any>>) => any;

export interface AxiosInterceptorCallbacks<V> {
	getFulfilledHandler: GetAxiosInterceptorHandler<AxiosInterceptorFulfilledHandler<V>>;
	getRejectedHandler: GetAxiosInterceptorHandler<AxiosInterceptorRejectedHandler>;
}
