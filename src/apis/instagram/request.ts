import { InstagramPostRequest, InstagramPostResponse } from "@/apis/instagram/models";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class InstagramApi extends BaseApi {
	public getPosts: AxiosRequestYourPlanetFunction<InstagramPostRequest, InstagramPostResponse> = (req) => {
		return this.axiosInstance.get(this.getUrl("/posts"), { params: req });
	};
}
