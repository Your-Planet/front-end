import { PostMeResponse } from "@/apis/post-me/index";
import { ResponseEntity } from "@/defines/apis/types";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

type Response = ResponseEntity<PostMeResponse>;

export default function usePostMe() {
	const router = useRouter();

	const handleSuccessPostMe = () => {
		// TODO @나은찬 포트폴리오 등록 성공 토스트 메시지 추가, 현재는 임시로 alert 처리
		// TODO API 추가 필요
		alert("포트폴리오 등록에 성공했습니다.");
		router.push("/");
	};

	const handleFailPostMe = (e: AxiosError<Response>) => {
		// TODO @나은찬 포트폴리오 등록 실패 안내 alert 추가, 현재는 임시 alert 처리
		// TODO API 추가 필요
		alert("포트폴리오 등록에 실패했습니다. 다시 시도해주세요.");
	};

	return {
		handleSuccessPostMe,
		handleFailPostMe,
	};
}
