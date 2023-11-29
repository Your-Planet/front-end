import { MemberApi } from "@/apis/member";
import axios from "axios";

const axiosInstance = axios.create({
	// TODO @김현규 배포 후 환경에 따른 API 주소 분기 처리
	baseURL: "http://localhost:8080",
});

export const api = {
	member: new MemberApi(axiosInstance, ""),
};
