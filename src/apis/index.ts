import { InstagramAuthApi } from "@/apis/instagram-auth";
import { InstagramGraphApi } from "@/apis/instagram-graph";
import { MemberApi } from "@/apis/member";
import { DOMAIN } from "@/defines/domain/constants";
import { deepFreeze } from "@/utils/object";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "/api",
});

const instagramApiAxiosInstance = axios.create({
	baseURL: DOMAIN.instagram.api,
});

const instagramGraphAxiosInstance = axios.create({
	baseURL: DOMAIN.instagram.graph,
});

[axiosInstance, instagramApiAxiosInstance, instagramGraphAxiosInstance].forEach((instance) => {
	instance.interceptors.response.use(
		(response) => response,
		(error) => {
			console.error("On Axios Response", error);
			return Promise.reject(error);
		},
	);
});

export const API = deepFreeze({
	member: new MemberApi(axiosInstance, "/member"),
	instagramAuth: new InstagramAuthApi(instagramApiAxiosInstance, "/oauth"),
	instagramGraph: new InstagramGraphApi(instagramGraphAxiosInstance, ""),
});
