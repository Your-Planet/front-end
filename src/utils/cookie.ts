import { CookieOptions } from "@/defines/cookie/types";
import { deleteCookie, getCookie as readCookie, setCookie as saveCookie } from "cookies-next";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

const URL_COMMA_COUNT = 3;

export const getExpiresDate = (expiresSeconds?: number) => {
	return expiresSeconds ? dayjs().utc().add(expiresSeconds, "s").toDate() : undefined;
};

export const getRootDomain = (url: string) => url.split(".").slice(-URL_COMMA_COUNT).join(".");

export const getCookie = (name: string) => readCookie(name) as any;

export const setCookie = (name: string, value: string, atExpires?: number, options?: CookieOptions) => {
	saveCookie(name, value, {
		...options,
		path: "/",
		expires: getExpiresDate(atExpires),
		domain: options?.domain ?? getRootDomain(globalThis?.location?.hostname ?? options?.req?.headers?.host ?? ""),
	});
};

export const removeCookie = (name: string) => {
	deleteCookie(name, {
		path: "/",
		domain: getRootDomain(window.location.hostname),
	});
};
