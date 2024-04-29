"use client";

import { AuthorDetailResponse } from "@/apis/member";
import useOpen from "@/hooks/common/useOpen";
import useQueryGetDetail from "@/hooks/queries/member/useQueryGetDetail";
import { Alert, Snackbar, TextField } from "@mui/material";
import { useEffect } from "react";

export interface InstagramUserNameTextFieldProps {}

function InstagramUserNameTextField(props: InstagramUserNameTextFieldProps) {
	const {} = props;

	const { data: { data } = {}, isError } = useQueryGetDetail({
		req: undefined,
		queryOption: {
			refetchOnWindowFocus: false,
		},
	});

	const memberInfo = data as AuthorDetailResponse;

	const { opened: isErrorOpened, handleOpen: handleOpenError, handleClose: handleCloseError } = useOpen();

	useEffect(() => {
		if (isError) {
			handleOpenError();
		} else {
			handleCloseError();
		}
	}, [isError]);

	return (
		<>
			<Snackbar
				open={isErrorOpened}
				onClose={handleCloseError}
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				autoHideDuration={6000}
			>
				<Alert onClose={handleCloseError} severity="error" variant="filled" sx={{ width: "100%" }}>
					인스타그램 계정 정보를 불러오는데 실패했습니다.
				</Alert>
			</Snackbar>

			<TextField label="인스타그램 계정" disabled helperText=" " value={memberInfo?.instagramUsername} />
		</>
	);
}

export default InstagramUserNameTextField;
