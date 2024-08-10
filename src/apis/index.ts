import { AuthApi } from "@/apis/auth/request";
import { InstagramApi } from "@/apis/instagram";
import { InstagramAuthApi } from "@/apis/instagram-auth";
import { InstagramGraphApi } from "@/apis/instagram-graph";
import { MemberApi } from "@/apis/member";
import { StudioApi } from "@/apis/studio";
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

export const AXIOS_INSTANCE = {
	yourPlanet: axiosInstance,
	instagramApi: instagramApiAxiosInstance,
	instagramGraph: instagramGraphAxiosInstance,
};

export const API = deepFreeze({
	auth: new AuthApi(axiosInstance, "auth"),
	member: new MemberApi(axiosInstance, "/member"),
	studio: new StudioApi(axiosInstance, "/studio"),
	instagram: new InstagramApi(axiosInstance, "/instagram"),
	instagramAuth: new InstagramAuthApi(instagramApiAxiosInstance, "/oauth"),
	instagramGraph: new InstagramGraphApi(instagramGraphAxiosInstance, ""),
});
