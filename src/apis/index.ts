import { InstagramAuthApi } from "@/apis/instagram-auth";
import { InstagramGraphApi } from "@/apis/instagram-graph";
import { MemberApi } from "@/apis/member";
import { HTTP_HEADER } from "@/defines/apis/constants";
import { COOKIE } from "@/defines/cookie/constants";
import { DOMAIN } from "@/defines/domain/constants";
import { getCookie } from "@/utils/cookie";
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

axiosInstance.interceptors.request.use((config) => {
	const accessToken = getCookie(COOKIE.accessToken);

	const newConfig = {
		...config,
	};

	if (accessToken) {
		newConfig.headers[HTTP_HEADER.authorization] = `Bearer ${accessToken}`;
	} else {
		delete newConfig.headers[HTTP_HEADER.authorization];
	}

	return newConfig;
});

[axiosInstance, instagramApiAxiosInstance, instagramGraphAxiosInstance].forEach((instance) => {
	instance.interceptors.response.use(
		(response) => response,
		(error) => {
			console.error(`On Axios Response at ${error.request.path}\n`, error.response.data);
			return Promise.reject(error);
		},
	);
});

export const API = deepFreeze({
	member: new MemberApi(axiosInstance, "/member"),
	instagramAuth: new InstagramAuthApi(instagramApiAxiosInstance, "/oauth"),
	instagramGraph: new InstagramGraphApi(instagramGraphAxiosInstance, ""),
});
