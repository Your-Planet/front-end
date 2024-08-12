import useRedirectLoginPage from "@/hooks/common/useRedirectLoginPage";
import {
	AxiosInterceptorRejectedHandler,
	GetAxiosInterceptorHandler,
} from "@/providers/AxiosConfigRegistry/hooks/useInternalAxiosConfig/defines/types";
import { Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { usePathname } from "next/navigation";
import { SnackbarKey, closeSnackbar, enqueueSnackbar } from "notistack";
import { useEffect, useRef } from "react";

export default function useGetAxiosUnauthorizedErrorHandler(): GetAxiosInterceptorHandler<AxiosInterceptorRejectedHandler> {
	const needLoginMessageRef = useRef(false);
	const needLoginMessageSnackbarKey = useRef<SnackbarKey>();

	const redirectLoginPage = useRedirectLoginPage();
	const pathname = usePathname();

	const closeNeedLoginMessageSnackbar = (snackbarKey: SnackbarKey) => {
		needLoginMessageRef.current = false;
		closeSnackbar(snackbarKey);
	};

	useEffect(() => {
		if (!needLoginMessageSnackbarKey.current) return;

		closeNeedLoginMessageSnackbar(needLoginMessageSnackbarKey.current);
	}, [pathname]);

	return () => {
		return () => {
			if (needLoginMessageRef.current) return;

			needLoginMessageSnackbarKey.current = enqueueSnackbar({
				message: "로그인이 필요합니다. 다시 로그인 해주세요.",
				variant: "error",
				autoHideDuration: null,
				action: (key) => {
					const handleClickLogin = () => {
						closeNeedLoginMessageSnackbar(key);
						redirectLoginPage();
					};

					return (
						<Button
							sx={{
								color: grey[50],
							}}
							onClick={handleClickLogin}
						>
							로그인하기
						</Button>
					);
				},
			});

			needLoginMessageRef.current = true;
		};
	};
}
