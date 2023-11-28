import { memberApi } from "@/apis/member";
import axios from "axios";

const axiosInstance = axios.create({
	baseURL: "http://localhost:8080",
});

export const api = {
	member: memberApi(axiosInstance, ""),
};
