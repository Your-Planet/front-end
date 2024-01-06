"use client";

import RegisterAuthorFormView from "@/components/register/author/RegisterAuthorFormView";
import { useSearchParams } from "next/navigation";
import InstagramAuthView from "@/components/register/author/InstagramAuthView";

export interface RegisterAuthorPageProps {}

function RegisterAuthorPage(props: RegisterAuthorPageProps) {
	const {} = props;

	const searchParams = useSearchParams();
	const instagramAuthCode = searchParams.get("code");

	return instagramAuthCode ? <RegisterAuthorFormView instagramAuthCode={instagramAuthCode} /> : <InstagramAuthView />;
}

export default RegisterAuthorPage;
