import { Box, TextField } from "@mui/material";
import React from "react";

const IntroductionField = () => {
	return (
		<Box className="flex w-[50vw]">
			<TextField label="작가 소개" rows={3} margin="normal" multiline fullWidth required />
		</Box>
	);
};

export default IntroductionField;
