import { JoinRequest, JoinResponse } from "@/apis/member/models";
import { LoginRequest, LoginResponse } from "@/apis/member/models/login";
import { ACCOUNT_COOKIE } from "@/components/login/LoginView/defines/cookie/constants";
import { AxiosRequestFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";
import { removeCookie, setCookie } from "@/utils/cookie";

export class MemberApi extends BaseApi {
	public join: AxiosRequestFunction<JoinRequest, JoinResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/join"), req);
	};

	public login: AxiosRequestFunction<LoginRequest, LoginResponse> = (req) => {
		const { email, password, isRemember } = req;

		if (isRemember) {
			setCookie(ACCOUNT_COOKIE.rememberUserEmail, email, ACCOUNT_COOKIE.maxAge);
		} else {
			removeCookie(ACCOUNT_COOKIE.rememberUserEmail);
		}

		return this.axiosInstance.post(this.getUrl("/login"), { email, password });
	};
}
