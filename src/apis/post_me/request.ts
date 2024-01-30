import { PostMeRequest, PostMeResponse } from "@/apis/post_me";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class PostMeApi extends BaseApi {
	public postPortfolio: AxiosRequestFunction<PostMeRequest, PostMeResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/post-me"), req);
	};
}
