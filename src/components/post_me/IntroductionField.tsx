"use client";

import { authorIntroductionContext } from "@/recoil/atoms/post_me";
import { Box, TextField } from "@mui/material";
import { useRecoilState } from "recoil";

function IntroductionField() {
	const [_, setIntroduction] = useRecoilState<string>(authorIntroductionContext);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIntroduction(event.target.value);
	};

	return (
		<Box className="flex w-[50vw] py-5">
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
		</Box>
	);
}

export default IntroductionField;
