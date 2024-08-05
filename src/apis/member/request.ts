import { MemberDetailRequest, MemberDetailResponse } from "@/apis/member/models";
import { AxiosRequestYourPlanetFunction } from "@/defines/apis/types";
import BaseApi from "@/utils/api/BaseApi";

export class MemberApi extends BaseApi {
	public detail: AxiosRequestYourPlanetFunction<MemberDetailRequest, MemberDetailResponse> = (req) => {
		return this.axiosInstance.get(this.getUrl("/detail"), { params: req });
	};
}
