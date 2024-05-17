import { enqueueClosableSnackbar } from "@/utils/snackbar";
import { AxiosError } from "axios";

const DEFAULT_ERROR_MESSAGE = "처리 중 오류가 발생했습니다.";

export const getErrorMessage = (e: unknown) => {
	if (e instanceof AxiosError) {
		return e?.response?.data.message ?? DEFAULT_ERROR_MESSAGE;
	}
	if (e instanceof Error) {
		return e.message ?? DEFAULT_ERROR_MESSAGE;
	}
	return DEFAULT_ERROR_MESSAGE;
};

export const handleCommonError = (
	e: unknown,
	processErrorCallback: (errorMessage: string) => unknown = (errorMessage) =>
		enqueueClosableSnackbar({
			message: errorMessage,
			variant: "error",
			autoHideDuration: null,
		}),
) => {
	console.error(e);
	processErrorCallback(getErrorMessage(e));
};
