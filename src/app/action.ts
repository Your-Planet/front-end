"use server";

import { COOKIE } from "@/defines/cookie/constants";
import { cookies } from "next/headers";

export const getAccessToken = () => {
	return cookies().get(COOKIE.accessToken)?.value;
};
