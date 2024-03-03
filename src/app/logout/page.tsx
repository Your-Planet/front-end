"use client";

import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import { removeCookie } from "@/utils/cookie";
import { getIaPath } from "@/utils/ia";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// TODO @김현규 서버사이드에서 실행되도록 수정
function LogoutPage() {
	const router = useRouter();

	useEffect(() => {
		removeCookie(COOKIE.accessToken);
		router.push(getIaPath(IA.login));
	}, []);

	return <></>;
}

export default LogoutPage;
