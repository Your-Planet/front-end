import { PostMeResponse } from "@/apis/post_me/models";
import { PostMeForm as PostMeRequest } from "@/components/post_me/defines/types";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class PostMeApi extends BaseApi {
	public postPortfolio: AxiosRequestFunction<PostMeRequest, PostMeResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/post-me"), req);
	};
}
