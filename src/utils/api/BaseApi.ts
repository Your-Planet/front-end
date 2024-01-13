import { AxiosInstance } from "axios";

abstract class BaseApi {
	private readonly _axiosInstance: AxiosInstance;

	protected get axiosInstance(): AxiosInstance {
		return this._axiosInstance;
	}

	private readonly _baseUrl: string;

	constructor(axiosInstance: AxiosInstance, baseUrl: string) {
		this._axiosInstance = axiosInstance;
		this._baseUrl = baseUrl;
	}

	protected getUrl(url: string): string {
		return `${this._baseUrl}${url}`;
	}
}

export default BaseApi;
