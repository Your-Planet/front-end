import { InstagramMediaRequest, InstagramMediaResponse } from "@/apis/instagram/models";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class InstagramApi extends BaseApi {
	public getMedias: AxiosRequestYourPlanetFunction<InstagramMediaRequest, InstagramMediaResponse> = (req) => {
		return this.axiosInstance.get(this.getUrl("/medias"), { params: req });
	};
}
