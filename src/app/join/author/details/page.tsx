import { authorizeInstagram } from "@/app/join/author/actions";
import CookieSetter from "@/components/common/CookieSetter";
import JoinAuthorFormView from "@/components/join/form/components/author/JoinAuthorFormView";
import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import { PageProps } from "@/defines/page/types";
import { getIaPath } from "@/utils/ia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function JoinAuthorDetailsPage(props: PageProps) {
	const { searchParams } = props;

	const cookie = cookies();
	const instagramAccessToken = cookie.get(COOKIE.instagramAccessToken)?.value;

	if (instagramAccessToken) {
		return <JoinAuthorFormView />;
	}

	const code = searchParams.code as string;

	if (!code) {
		redirect(getIaPath(IA.join.author.verify));
	}

	const { accessToken, userId, expiresInSeconds } = await authorizeInstagram(code);

	return (
		<CookieSetter name={COOKIE.instagramAccessToken} value={accessToken} expiresAt={expiresInSeconds}>
			<JoinAuthorFormView />
		</CookieSetter>
	);
}

export default JoinAuthorDetailsPage;
