"use client";

import { AuthorJoinRequest } from "@/apis/member";
import useQueryGetDetail from "@/hooks/queries/member/useQueryGetDetail";
import { TextField } from "@mui/material";

export interface InstagramUserNameTextFieldProps {}

function InstagramUserNameTextField(props: InstagramUserNameTextFieldProps) {
	const {} = props;

	const { data: { data: memberInfo } = {} } = useQueryGetDetail<AuthorJoinRequest>({
		req: undefined,
		queryOption: {
			refetchOnWindowFocus: false,
		},
	});

	return <TextField label="인스타그램 계정" disabled helperText=" " value={memberInfo?.instagramUsername} />;
}

export default InstagramUserNameTextField;
