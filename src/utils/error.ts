import { enqueueClosableSnackbar } from "@/utils/snackbar";
import { AxiosError } from "axios";

const DEFAULT_MESSAGE = "처리 중 오류가 발생했습니다.";

export const getErrorMessage = (e: unknown) => {
	if (e instanceof AxiosError) {
		return e?.response?.data.message ?? DEFAULT_MESSAGE;
	}
	if (e instanceof Error) {
		return e.message ?? DEFAULT_MESSAGE;
	}
	return DEFAULT_MESSAGE;
};

export const handleCommonError = (e: unknown) => {
	const message = getErrorMessage(e);

	enqueueClosableSnackbar({
		message,
		variant: "error",
		autoHideDuration: null,
	});
};
