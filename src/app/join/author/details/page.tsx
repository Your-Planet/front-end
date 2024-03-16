import { getInstagramAccessToken } from "@/app/join/author/actions";
import JoinAuthorFormView from "@/components/join/form/components/author/JoinAuthorFormView";
import { IA } from "@/defines/ia/constants";
import { PageProps } from "@/defines/page/types";
import { getIaPath } from "@/utils/ia";
import { AxiosError } from "axios";
import { redirect } from "next/navigation";

const getAccessCode = async (code: string) => {
	return await getInstagramAccessToken(code);
};

async function JoinAuthorDetailsPage(props: PageProps) {
	const { searchParams } = props;

	const code = searchParams.code as string;

	if (!code) {
		redirect(getIaPath(IA.join.author.verify));
	}

	try {
		const { accessToken, userId } = await getAccessCode(code);

		// TODO @김현규 장기 실행 토큰 발급
		// TODO @김현규 인스타 아이디 가져오기
		console.log("accessToken\n", accessToken);
		console.log("userId\n", userId);
	} catch (e) {
		const error = e as AxiosError;
		// TODO @김현규 에러 처리
		console.log("error\n", error?.response?.data);
	}

	return (
		<>
			<JoinAuthorFormView />
		</>
	);
}

export default JoinAuthorDetailsPage;
