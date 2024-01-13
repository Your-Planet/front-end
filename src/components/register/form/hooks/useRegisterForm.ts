import { RegisterResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

type Response = ResponseEntity<RegisterResponse>;

export default function useRegisterForm() {
	const router = useRouter();

	const handleSuccessRegister = () => {
		// TODO @김현규 회원가입 성공 토스트 메시지 추가, 현재는 임시로 alert 처리
		alert("회원가입에 성공했습니다.");
		router.push("/login");
	};

	const handleFailRegister = (e: AxiosError<Response>) => {
		// TODO @김현규 회원가입 실패 안내 alert 추가, 현재는 임시 alert 처리
		alert("회원가입에 실패했습니다. 다시 시도해주세요.");
	};

	return {
		handleSuccessRegister,
		handleFailRegister,
	};
}
