import { creatorizeInstagram } from "@/app/join/creator/actions";
import CookieSetter from "@/components/common/CookieSetter";
import JoinCreatorFormView from "@/components/join/form/components/creator/JoinCreatorFormView";
import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import { PageProps } from "@/defines/page/types";
import { getIaPath } from "@/utils/ia";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function JoinCreatorDetailsPage(props: PageProps) {
	const { searchParams } = props;

	const cookie = cookies();
	const instagramAccessToken = cookie.get(COOKIE.instagramAccessToken)?.value;

	if (instagramAccessToken) {
		return <JoinCreatorFormView />;
	}

	const code = searchParams.code as string;

	if (!code) {
		redirect(getIaPath(IA.join.creator.verify));
	}

	const { accessToken, expiresInSeconds } = await creatorizeInstagram(code);

	return (
		<CookieSetter name={COOKIE.instagramAccessToken} value={accessToken} expiresAt={expiresInSeconds}>
			<JoinCreatorFormView />
		</CookieSetter>
	);
}

export default JoinCreatorDetailsPage;
