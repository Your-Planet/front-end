import { JoinResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { COOKIE } from "@/defines/cookie/constants";
import { IA } from "@/defines/ia/constants";
import { removeCookie } from "@/utils/cookie";
import { getIaPath } from "@/utils/ia";
import { AxiosError } from "axios";
import { usePathname, useRouter } from "next/navigation";

type Response = ResponseEntity<JoinResponse>;

export default function useJoinForm() {
	const router = useRouter();

	const handleSuccessJoin = () => {
		// TODO @김현규 회원가입 성공 토스트 메시지 추가, 현재는 임시로 alert 처리
		alert("회원가입에 성공했습니다.");

		const pathname = usePathname();
		const type = pathname.split("/")[1];

		removeCookie(COOKIE.shoppingInformationTerm);

		if (type === "author") {
			router.push(getIaPath(IA.join.author.complete));
		} else if (type === "sponsor") {
			router.push(getIaPath(IA.join.sponsor.complete));
		} else {
			// TODO @나은찬 예외처리. 임시 alert
			alert("유효하지 않은 타입입니다.");
		}
	};

	const handleFailJoin = (e: AxiosError<Response>) => {
		// TODO @김현규 회원가입 실패 안내 alert 추가, 현재는 임시 alert 처리
		alert("회원가입에 실패했습니다. 다시 시도해주세요.");
	};

	return {
		handleSuccessJoin,
		handleFailJoin,
	};
}
