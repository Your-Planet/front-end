"use client";

import InstagramAuthView from "@/components/register/author/InstagramAuthView";
import RegisterAuthorFormView from "@/components/register/author/RegisterAuthorFormView";
import { useSearchParams } from "next/navigation";

export interface RegisterAuthorPageProps {}

function RegisterAuthorPage(props: RegisterAuthorPageProps) {
	const {} = props;

	const searchParams = useSearchParams();
	const instagramAuthCode = searchParams.get("code");

	return instagramAuthCode ? <RegisterAuthorFormView instagramAuthCode={instagramAuthCode} /> : <InstagramAuthView />;
}

export default RegisterAuthorPage;
