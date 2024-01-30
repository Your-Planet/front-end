import { MemberApi } from "@/apis/member";
import { PostMeApi } from "@/apis/post_me";
import { deepFreeze } from "@/utils/object";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "/api",
});

export const API = deepFreeze({
	member: new MemberApi(axiosInstance, "/member"),
	post_me: new PostMeApi(axiosInstance, "/post-me"),
});
