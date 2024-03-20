import { ShortLivedAccessTokenRequest, ShortLivedAccessTokenResponse } from "@/apis/instagram-auth/models";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";
import { objectToFormData } from "@/utils/object";

export class InstagramAuthApi extends BaseApi {
	public shortLivedAccessToken: AxiosRequestFunction<ShortLivedAccessTokenRequest, ShortLivedAccessTokenResponse> = (
		req,
	) => {
		return this.axiosInstance.post(this.getUrl("/access_token"), objectToFormData(req), {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
	};
}
