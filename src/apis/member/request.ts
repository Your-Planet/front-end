import { JoinRequest, JoinResponse } from "@/apis/member/models";
import { LoginRequest, LoginResponse } from "@/apis/member/models/login";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class MemberApi extends BaseApi {
	public join: AxiosRequestYourPlanetFunction<JoinRequest, JoinResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/join"), req);
	};

	public login: AxiosRequestYourPlanetFunction<LoginRequest, LoginResponse> = (req) => {
		return this.axiosInstance.post(this.getUrl("/login"), req);
	};
}
