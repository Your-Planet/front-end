import { AxiosRequestHeaders } from "axios";

export const HTTP_HEADER_KEY = {
	authorization: "X-AUTH-TOKEN",
};

export const HTTP_HEADERS = {
	multipartFormData: {
		"Content-Type": "multipart/form-data",
	},
} as const satisfies Record<string, Partial<AxiosRequestHeaders>>;
