import {
	GetCreatorsRequest,
	GetCreatorsResponse,
	GetPriceRequest,
	GetPriceResponse,
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
import { HTTP_HEADERS } from "@/defines/apis/constants";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";
import { createMultipartFormData } from "@/utils/object";

export class StudioApi extends BaseApi {
	public getProfile: AxiosRequestYourPlanetFunction<GetProfileRequest, GetProfileResponse> = () => {
		return this.axiosInstance.get(this.getUrl("/profile"));
	};

	public postProfile: AxiosRequestYourPlanetFunction<PostProfileRequest, PostProfileResponse> = (req) => {
		const { profileImage, studioRegisterForm } = req;

		const formData = createMultipartFormData({
			files: {
				key: "profileImage",
				value: [profileImage],
			},
			jsonBody: {
				key: "studioRegisterForm",
				value: studioRegisterForm,
			},
		});

		return this.axiosInstance.post(this.getUrl("/profile"), formData, {
			headers: HTTP_HEADERS.multipartFormData,
		});
	};

	public getPriceTemp: AxiosRequestYourPlanetFunction<GetPriceTempRequest, GetPriceTempResponse> = () => {
		return this.axiosInstance.get(this.getUrl("/price-temp"));
	};

	public postPriceTemp: AxiosRequestYourPlanetFunction<PostPriceTempRequest, PostPriceTempResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/price-temp"), req);
	};

	public getPrice: AxiosRequestYourPlanetFunction<GetPriceRequest, GetPriceResponse> = () => {
		return this.axiosInstance.get(this.getUrl("/price"));
	};

	public postPrice: AxiosRequestYourPlanetFunction<PostPriceRequest, PostPriceResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/price"), req);
	};

	public getCreators: AxiosRequestYourPlanetFunction<GetCreatorsRequest, GetCreatorsResponse> = (req) => {
		return this.axiosInstance.get(this.getUrl("/"), {
			params: req,
		});
	};
}
