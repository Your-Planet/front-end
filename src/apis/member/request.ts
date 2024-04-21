import { JoinRequest, JoinResponse } from "@/apis/member/models";
import {
	FindEmailRequest,
	FindEmailResponse,
	FindPasswordRequest,
	FindPasswordResponse,
} from "@/apis/member/models/find";
import { LoginRequest, LoginResponse } from "@/apis/member/models/login";
import { ResetPasswordRequest, ResetPasswordResponse } from "@/apis/member/models/reset-pw";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class MemberApi extends BaseApi {
	public join: AxiosRequestYourPlanetFunction<JoinRequest, JoinResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/join"), req);
	};

	public login: AxiosRequestYourPlanetFunction<LoginRequest, LoginResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/login"), req);
	};

	public findEmail: AxiosRequestYourPlanetFunction<FindEmailRequest, FindEmailResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/find-id"), req);
	};

	public findPassword: AxiosRequestYourPlanetFunction<FindPasswordRequest, FindPasswordResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/validation"), req);
	};

	public resetPassword: AxiosRequestYourPlanetFunction<ResetPasswordRequest, ResetPasswordResponse> = (req) => {
		// is it right?
		const refineReq = {
			name: req.name,
			email: req.email,
			tel: req.tel,
			newPassword: req.password,
		};

		return this.axiosInstance.post(this.getUrl("/reset-password"), refineReq);
	};
}
