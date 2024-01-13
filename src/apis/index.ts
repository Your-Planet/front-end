import { MemberApi } from "@/apis/member";
import { SERVER_URL } from "@/defines/apis/constants";
import { deepFreeze } from "@/utils/object";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: SERVER_URL,
});

export const API = deepFreeze({
	member: new MemberApi(axiosInstance, "/member"),
});
