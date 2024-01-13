import { deleteCookie, getCookie as readCookie, setCookie as saveCookie } from "cookies-next";
import { DefaultOptions } from "cookies-next/lib/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

type CookieOptions = Omit<DefaultOptions, "expires">;

export const getRootDomain = (url: string) => url.split(".").slice(-2).join(".");

export const getCookie = (name: string) => readCookie(name) as any;

export const setCookie = (name: string, value: string, atExpires?: number, options?: CookieOptions) => {
	const atExpiresDate = atExpires ? dayjs().utc().add(atExpires, "s").toDate() : undefined;

	saveCookie(name, value, {
		...options,
		path: "/",
		expires: atExpiresDate,
		domain: options?.domain ?? getRootDomain(globalThis?.location?.hostname ?? options?.req?.headers?.host ?? ""),
	});
};

export const removeCookie = (name: string) => {
	deleteCookie(name, {
		path: "/",
		domain: getRootDomain(window.location.hostname),
	});
};
