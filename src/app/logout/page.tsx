"use client";

import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import { removeCookie } from "@/utils/cookie";
import { getIaPath } from "@/utils/ia";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

function LogoutPage() {
	const router = useRouter();
	const searchParams = useSearchParams();

	useEffect(() => {
		removeCookie(COOKIE.accessToken);

		const redirectUrl = searchParams.get("redirect") ?? getIaPath(IA);
		router.push(redirectUrl);
	}, []);

	// TODO @김현규 로딩 UI
	return <></>;
}

export default LogoutPage;
