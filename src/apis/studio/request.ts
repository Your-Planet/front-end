import { PostProfileRequest, PostProfileResponse } from "@/apis/studio/models";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class StudioApi extends BaseApi {
	public postProfile: AxiosRequestYourPlanetFunction<PostProfileRequest, PostProfileResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/profile"), req);
	};
}
