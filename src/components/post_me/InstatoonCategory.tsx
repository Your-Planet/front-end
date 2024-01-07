import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material";

const InstatoonCategory = () => {
	// TODO: search branch 머지 후 카테고리 선택 기능 수정
	return (
		<Box className="flex flex-col w-[50vw] pt-3">
			<FormControl
				required
				// error={error}
				component="fieldset"
				sx={{ m: 3 }}
				variant="standard"
			>
				<FormLabel component="legend">인스타툰 카테고리 (최대 3개)</FormLabel>
				<FormGroup className="pt-1">
					{/* TODO: search 브랜치 머지 후 label 체크박스 수정*/}
					<FormControlLabel className="w-fit" label="일상툰" control={<Checkbox size="small" />} />
					<FormControlLabel className="w-fit" label="유머툰" control={<Checkbox size="small" />} />
					<FormControlLabel className="w-fit" label="공감툰" control={<Checkbox size="small" />} />
					<FormControlLabel className="w-fit" label="연애툰" control={<Checkbox size="small" />} />
					<FormControlLabel className="w-fit" label="에세이툰" control={<Checkbox size="small" />} />
				</FormGroup>
				<FormHelperText>최소 1개를 선택해 주세요</FormHelperText>
			</FormControl>
		</Box>
	);
};

export default InstatoonCategory;
