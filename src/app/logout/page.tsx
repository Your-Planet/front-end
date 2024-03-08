"use client";

import { COOKIE } from "@/defines/cookie/constants";
import { removeCookie } from "@/utils/cookie";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// TODO @김현규 서버사이드에서 실행되도록 수정
function LogoutPage() {
	const router = useRouter();

	useEffect(() => {
		removeCookie(COOKIE.accessToken);
		router.refresh();
	}, []);

	return <></>;
}

export default LogoutPage;
