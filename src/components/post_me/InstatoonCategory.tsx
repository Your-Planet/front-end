import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from "@mui/material";

const InstatoonCategory = () => {
	return (
		<Box className="flex flex-col w-[50vw] pt-3">
			<Typography variant="subtitle1">인스타툰 카테고리 (최대 3개)</Typography>
			<FormGroup className="pt-1">
				<FormControlLabel className="w-fit" label="일상툰" control={<Checkbox size="small" />} />
				<FormControlLabel className="w-fit" label="유머툰" control={<Checkbox size="small" />} />
				<FormControlLabel className="w-fit" label="공감툰" control={<Checkbox size="small" />} />
				<FormControlLabel className="w-fit" label="연애툰" control={<Checkbox size="small" />} />
				<FormControlLabel className="w-fit" label="에세이툰" control={<Checkbox size="small" />} />
			</FormGroup>
		</Box>
	);
};

export default InstatoonCategory;
