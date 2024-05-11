import { GetProfileRequest, GetProfileResponse, PostProfileRequest, PostProfileResponse } from "@/apis/studio/models";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class StudioApi extends BaseApi {
	public getProfile: AxiosRequestYourPlanetFunction<GetProfileRequest, GetProfileResponse> = () => {
		return this.axiosInstance.get(this.getUrl("/profile"));
	};

	public postProfile: AxiosRequestYourPlanetFunction<PostProfileRequest, PostProfileResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/profile"), req);
	};
}
