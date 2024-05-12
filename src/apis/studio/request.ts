import {
	GetPriceTempRequest,
	GetPriceTempResponse,
	GetProfileRequest,
	GetProfileResponse,
	PostPriceRequest,
	PostPriceResponse,
	PostPriceTempRequest,
	PostPriceTempResponse,
	PostProfileRequest,
	PostProfileResponse,
} from "@/apis/studio/models";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class StudioApi extends BaseApi {
	// GET
	public getProfile: AxiosRequestYourPlanetFunction<GetProfileRequest, GetProfileResponse> = () => {
		return this.axiosInstance.get(this.getUrl("/profile"));
	};

	public getPriceTemp: AxiosRequestYourPlanetFunction<GetPriceTempRequest, GetPriceTempResponse> = (req) => {
		return this.axiosInstance.get(this.getUrl("/price-temp"));
	};

	// POST
	public postProfile: AxiosRequestYourPlanetFunction<PostProfileRequest, PostProfileResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/profile"), req);
	};

	public postPriceTemp: AxiosRequestYourPlanetFunction<PostPriceTempRequest, PostPriceTempResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/price-temp"), req);
	};

	public postPrice: AxiosRequestYourPlanetFunction<PostPriceRequest, PostPriceResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/price"), req);
	};
}
