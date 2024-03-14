import { AccessTokenRequest, AccessTokenResponse } from "@/apis/instagram-auth/models";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class InstagramAuthApi extends BaseApi {
	public accessToken: AxiosRequestFunction<AccessTokenRequest, AccessTokenResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/access_token"), req);
	};
}
