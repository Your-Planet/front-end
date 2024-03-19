import { Box, TextField } from "@mui/material";

function InstagramIdField() {
	return (
		<Box className="flex w-[50vw]">
			<TextField label="인스타그램 계정" defaultValue="instagram" margin="normal" size="small" disabled fullWidth />
		</Box>
	);
}

export default InstagramIdField;
