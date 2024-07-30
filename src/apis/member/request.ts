import {
	FindEmailRequest,
	FindEmailResponse,
	JoinRequest,
	JoinResponse,
	LoginRequest,
	LoginResponse,
	MemberDetailRequest,
	MemberDetailResponse,
	ResetPasswordRequest,
	ResetPasswordResponse,
	ValidateMemberRequest,
	ValidateMemberResponse,
} from "@/apis/member/models";
import { RefreshTokenRequest, RefreshTokenResponse } from "@/apis/member/models/refresh-token";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export const REFRESH_TOKEN_URL = "/refresh-token";

export class MemberApi extends BaseApi {
	public refreshToken: AxiosRequestYourPlanetFunction<RefreshTokenRequest, RefreshTokenResponse> = () => {
		return this.axiosInstance.post(this.getUrl(REFRESH_TOKEN_URL));
	};

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

	public detail: AxiosRequestYourPlanetFunction<MemberDetailRequest, MemberDetailResponse> = (req) => {
		return this.axiosInstance.get(this.getUrl("/detail"), { params: req });
	};
}
