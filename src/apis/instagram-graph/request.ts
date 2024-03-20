import { MeRequest, MeResponse } from "@/apis/instagram-graph/models";
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

	public me: AxiosRequestFunction<MeRequest, MeResponse> = (req) => {
		const { fields: fieldArray, ...rest } = req;
		return this.axiosInstance.get(this.getUrl("/v19.0/me"), {
			params: {
				...rest,
				fields: fieldArray?.join(","),
			},
		});
	};
}
