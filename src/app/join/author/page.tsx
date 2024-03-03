"use client";

import InstagramAuthView from "@/components/join/InstagramAuthView";
import JoinAuthorFormView from "@/components/join/form/components/author/JoinAuthorFormView";
import { useSearchParams } from "next/navigation";

export interface JoinAuthorPageProps {}

function JoinAuthorPage(props: JoinAuthorPageProps) {
	const {} = props;

	const searchParams = useSearchParams();
	const instagramAuthCode = searchParams.get("code");

	return instagramAuthCode ? <JoinAuthorFormView instagramAuthCode={instagramAuthCode} /> : <InstagramAuthView />;
}

export default JoinAuthorPage;
