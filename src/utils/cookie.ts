import { deleteCookie, getCookie as readCookie, setCookie as saveCookie } from "cookies-next";
import { DefaultOptions } from "cookies-next/lib/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

type CookieOptions = Omit<DefaultOptions, "expires">;

const URL_COMMA_COUNT = 3;

export const getRootDomain = (url: string) => url.split(".").slice(-URL_COMMA_COUNT).join(".");

export const getCookie = (name: string) => readCookie(name) as any;

export const setCookie = (name: string, value: string, atExpires?: number, options?: CookieOptions) => {
	const atExpiresDate = atExpires ? dayjs().utc().add(atExpires, "s").toDate() : undefined;

	saveCookie(name, value, {
		...options,
		path: "/",
		expires: atExpiresDate,
		domain: options?.domain ?? getRootDomain(globalThis?.location?.hostname ?? options?.req?.headers?.host ?? ""),
	});
	console.log(readCookie(name));
};

export const removeCookie = (name: string) => {
	deleteCookie(name, {
		path: "/",
		domain: getRootDomain(window.location.hostname),
	});
};
