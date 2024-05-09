import { PostPriceRequest, PostPriceResponse, PostProfileRequest, PostProfileResponse } from "@/apis/studio/models";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class StudioApi extends BaseApi {
	public postProfile: AxiosRequestYourPlanetFunction<PostProfileRequest, PostProfileResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/profile"), req);
	};

	public postPriceTemp: AxiosRequestYourPlanetFunction<PostPriceRequest, PostPriceResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/price-temp"), req);
	};

	public postPrice: AxiosRequestYourPlanetFunction<PostPriceRequest, PostPriceResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/price"), req);
	};
}
