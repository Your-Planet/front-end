import { getInstagramAccessToken } from "@/app/join/author/actions";
import CookieSetter from "@/components/common/CookieSetter";
import JoinAuthorFormView from "@/components/join/form/components/author/JoinAuthorFormView";
import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import { PageProps } from "@/defines/page/types";
import { getIaPath } from "@/utils/ia";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

async function JoinAuthorDetailsPage(props: PageProps) {
	const { searchParams } = props;

	const code = searchParams.code as string;

	if (!code) {
		redirect(getIaPath(IA.join.author.verify));
	}

	const { accessToken, userId, expiresInSeconds } = await getInstagramAccessToken(code);
	try {
		// TODO @김현규 인스타 아이디 가져오기
	} catch (e) {
		const error = e as AxiosError;
		// TODO @김현규 에러 처리
		console.log("error\n", error);
		console.log("request", error?.request);
		console.log("response", error?.response);
	}

	return (
		<CookieSetter name={COOKIE.instagramAccessToken} value={accessToken} expiresAt={expiresInSeconds}>
			<JoinAuthorFormView />
		</CookieSetter>
	);
}

export default JoinAuthorDetailsPage;
