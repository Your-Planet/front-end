import { JoinResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { IA } from "@/defines/ia/constants";
import { shoppingInformationTerm } from "@/defines/sessionStorage/constants";
import { getIaPath } from "@/utils/ia";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

type Response = ResponseEntity<JoinResponse>;

export default function useJoinForm() {
	const router = useRouter();

	const handleSuccessJoin = () => {
		// TODO @김현규 회원가입 성공 토스트 메시지 추가, 현재는 임시로 alert 처리
		alert("회원가입에 성공했습니다.");

		sessionStorage.removeItem(shoppingInformationTerm);
		router.push(getIaPath(IA.join.complete));
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
