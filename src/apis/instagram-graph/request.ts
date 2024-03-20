import { LongLivedAccessTokenRequest, LongLivedAccessTokenResponse } from "@/apis/instagram-graph/models/accessToken";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class InstagramGraphApi extends BaseApi {
	public longLivedAccessToken: AxiosRequestFunction<LongLivedAccessTokenRequest, LongLivedAccessTokenResponse> = (
		req,
	) => {
		return this.axiosInstance.get(this.getUrl("/access_token"), {
			params: req,
		});
	};
}
