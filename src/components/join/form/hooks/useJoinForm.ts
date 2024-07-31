import { JoinResponse } from "@/apis/member";
import { ResponseEntity } from "@/defines/apis/types";
import { IA } from "@/defines/ia/constants";
import { SESSION_STORAGE } from "@/defines/sessionStorage/constants";
import { getIaPath } from "@/utils/ia";
import { enqueueClosableSnackbar } from "@/utils/snackbar";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

type Response = ResponseEntity<JoinResponse>;

export default function useJoinForm() {
	const router = useRouter();

	const handleSuccessJoin = () => {
		sessionStorage.removeItem(SESSION_STORAGE.shoppingInformationTerm);
		router.push(getIaPath(IA.join.complete));
	};

	const handleFailJoin = (e: AxiosError<Response>) => {
		enqueueClosableSnackbar({
			message: e?.response?.data.message,
			variant: "error",
		});
	};

	return {
		handleSuccessJoin,
		handleFailJoin,
	};
}
