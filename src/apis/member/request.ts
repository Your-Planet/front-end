import { RegisterRequest, RegisterResponse } from "@/apis/member/models";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class MemberApi extends BaseApi {
	public register: AxiosRequestFunction<RegisterRequest, RegisterResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/register"), req);
	};
}
