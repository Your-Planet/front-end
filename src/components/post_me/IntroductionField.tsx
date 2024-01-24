"use client";

import { authorIntroductionContext } from "@/recoil/atoms/post_me";
import { getAuthorIntroductionValidateRule } from "@/utils/react-hook-form/rule";
import { FormControl, Typography } from "@mui/material";
import { useRecoilState } from "recoil";
import { AUTHOR_INTRODUCTION_LENGTH } from "../../defines/post_me/constants";
import ReactHookForm from "../common/ReactHookForm/index";
import { PostMeForm } from "./defines/types";

function IntroductionField() {
	const [_, setIntroduction] = useRecoilState<string>(authorIntroductionContext);
	const { TextField } = ReactHookForm<PostMeForm>();
	const hideAsteriskStyle = {
		".MuiFormLabel-root, legend": {
			width: 0,
		},
		".MuiFormHelperText-root": {
			marginX: 0,
		},
	};

	const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIntroduction(event.target.value);
	};

	return (
		<FormControl className="flex w-[50vw]">
			<Typography>작가 소개</Typography>
			<TextField
				formName="authorIntroduction"
				required
				label=""
				rows={3}
				margin="normal"
				multiline
				fullWidth
				InputLabelProps={{ shrink: true }}
				onInput={handleInput}
				inputProps={{ maxLength: AUTHOR_INTRODUCTION_LENGTH.max + 1 }}
				rules={{
					...getAuthorIntroductionValidateRule(),
				}}
				sx={hideAsteriskStyle}
				placeholder="자신을 자유롭게 소개해주세요"
			/>
		</FormControl>
	);
}

export default IntroductionField;
