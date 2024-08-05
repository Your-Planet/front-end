import {
	FindEmailRequest,
	FindEmailResponse,
	JoinRequest,
	JoinResponse,
	LoginRequest,
	LoginResponse,
	ResetPasswordRequest,
	ResetPasswordResponse,
	ValidateMemberRequest,
	ValidateMemberResponse,
} from "@/apis/auth/models";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class AuthApi extends BaseApi {
	public join: AxiosRequestYourPlanetFunction<JoinRequest, JoinResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/join"), req);
	};

	public login: AxiosRequestYourPlanetFunction<LoginRequest, LoginResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/login"), req);
	};

	public findEmail: AxiosRequestYourPlanetFunction<FindEmailRequest, FindEmailResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/find-email"), req);
	};

	public validateMember: AxiosRequestYourPlanetFunction<ValidateMemberRequest, ValidateMemberResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/validation"), req);
	};

	public resetPassword: AxiosRequestYourPlanetFunction<ResetPasswordRequest, ResetPasswordResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/reset-password"), req);
	};
}
