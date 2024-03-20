import { Box, TextField } from "@mui/material";

function IntroductionField() {
	return (
		<Box className="flex w-[50vw] py-5">
			<TextField
				label="작가 소개"
				rows={3}
				margin="normal"
				multiline
				fullWidth
				required
				InputLabelProps={{ shrink: true }}
				placeholder="자신을 자유롭게 소개해주세요"
			/>
		</Box>
	);
}

export default IntroductionField;
