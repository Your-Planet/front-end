export type AxiosInterceptorFulfilledCallback<V> = (value: V) => V | Promise<V>;
export type AxiosInterceptorRejectedCallback = (error: any) => any;

export interface AxiosInterceptorCallbacks<V> {
	handleFulfilled?: AxiosInterceptorFulfilledCallback<V>;
	handleRejected?: AxiosInterceptorRejectedCallback;
}
