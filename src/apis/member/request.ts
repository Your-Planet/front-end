import { JoinRequest, JoinResponse } from "@/apis/member/models";
import { FindEmailRequest, FindEmailResponse } from "@/apis/member/models/find";
import { LoginRequest, LoginResponse } from "@/apis/member/models/login";
import { ValidateMemberRequest, ValidateMemberResponse } from "@/apis/member/models/validate";
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

	public validateMember: AxiosRequestYourPlanetFunction<ValidateMemberRequest, ValidateMemberResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/validation"), req);
	};

	public resetPassword: AxiosRequestYourPlanetFunction<ResetPasswordRequest, ResetPasswordResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/reset-password"), req);
	};
}
