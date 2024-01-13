import { RegisterRequest, RegisterResponse } from "@/apis/member/models";
import { LoginRequest, LoginResponse } from "@/apis/member/models/login";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class MemberApi extends BaseApi {
	public register: AxiosRequestFunction<RegisterRequest, RegisterResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/register"), req);
	};

	public login: AxiosRequestFunction<LoginRequest, LoginResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/login"), req);
	};
}
