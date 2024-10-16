"use client";

import { CreatorDetailResponse } from "@/apis/member";
import { useMemberDetailContext } from "@/providers/MemberDetailProvider";
import { enqueueClosableSnackbar } from "@/utils/snackbar";
import { TextField } from "@mui/material";
import { useEffect } from "react";

export interface InstagramUserNameTextFieldProps {
	label: string;
}

function InstagramUserNameTextField(props: InstagramUserNameTextFieldProps) {
	const { label } = props;

	const { data: { data } = {}, isError } = useMemberDetailContext();

	const memberInfo = data as CreatorDetailResponse;

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
