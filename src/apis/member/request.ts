import { JoinRequest, JoinResponse } from "@/apis/member/models";
import { LoginRequest, LoginResponse } from "@/apis/member/models/login";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class MemberApi extends BaseApi {
	public join: AxiosRequestFunction<JoinRequest, JoinResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/join"), req);
	};

	public login: AxiosRequestFunction<LoginRequest, LoginResponse> = (req) => {
		const { email, password } = req;
		return this.axiosInstance.post(this.getUrl("/login"), { email, password });
	};
}
