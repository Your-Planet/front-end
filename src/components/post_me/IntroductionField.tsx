"use client";

import { authorIntroductionContext } from "@/recoil/atoms/post_me";
import { FormControl, FormHelperText, TextField } from "@mui/material";
import { useRecoilState } from "recoil";

function IntroductionField() {
	const [introduction, setIntroduction] = useRecoilState<string>(authorIntroductionContext);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIntroduction(event.target.value);
	};

	const error = introduction.length < 10;

	return (
		<FormControl className="flex w-[50vw] my-2" error={error}>
			<TextField
				label="작가 소개"
				rows={3}
				margin="normal"
				multiline
				fullWidth
				InputLabelProps={{ shrink: true }}
				onChange={handleChange}
				placeholder="자신을 자유롭게 소개해주세요"
			/>
			<FormHelperText className="m-0">최소 10자 이상 입력해주세요</FormHelperText>
		</FormControl>
	);
}

export default IntroductionField;
