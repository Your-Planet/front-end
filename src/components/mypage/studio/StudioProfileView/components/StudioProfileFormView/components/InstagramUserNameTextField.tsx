"use client";

import { AuthorDetailResponse } from "@/apis/member";
import useQueryGetDetail from "@/hooks/queries/member/useQueryGetDetail";
import { enqueueClosableSnackbar } from "@/utils/snackbar";
import { TextField } from "@mui/material";
import { useEffect } from "react";

export interface InstagramUserNameTextFieldProps {
	label: string;
}

function InstagramUserNameTextField(props: InstagramUserNameTextFieldProps) {
	const { label } = props;

	const { data: { data } = {}, isError } = useQueryGetDetail({
		req: undefined,
		queryOption: {
			refetchOnWindowFocus: false,
		},
	});

	const memberInfo = data as AuthorDetailResponse;

	useEffect(() => {
		if (isError) {
			enqueueClosableSnackbar({
				message: "인스타그램 계정 정보를 불러오는데 실패했습니다.",
				variant: "error",
			});
		}
	}, [isError]);

	return <TextField label={label} disabled helperText=" " value={memberInfo?.instagramUsername ?? ""} />;
}

export default InstagramUserNameTextField;
