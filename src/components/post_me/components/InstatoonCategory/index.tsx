"use client";

import { Box, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from "@mui/material";
import { useState } from "react";
import HelpIcon from "../../../common/HelpIcon/index";

function InstatoonCategory() {
	// TODO: search branch 머지 후 카테고리 선택 기능 수정
	const [checked, setChecked] = useState({
		EMPATHY: false,
		DAILY: false,
		HUMOR: false,
		DATE: false,
		HEALING: false,
	});
	const { EMPATHY, DAILY, HUMOR, DATE, HEALING } = checked;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked({
			...checked,
			[event.target.name]: event.target.checked,
		});
	};

	const error = [EMPATHY, DAILY, HUMOR, DATE, HEALING].filter((v) => v).length !== 3;

	return (
		<Box className="flex flex-col w-[50vw] py-5">
			<FormControl error={error} component="fieldset" variant="standard">
				<Box className="flex items-center">
					<FormLabel component="legend">인스타툰 카테고리</FormLabel>
					<HelpIcon />
				</Box>
				<FormGroup className="pt-1">
					{/* TODO: search 브랜치 머지 후 label 체크박스 수정 */}
					<FormControlLabel
						className="w-fit"
						label="일상툰"
						control={<Checkbox onChange={handleChange} size="small" checked={DAILY} name="DAILY" />}
					/>
					<FormControlLabel
						className="w-fit"
						label="유머툰"
						control={<Checkbox onChange={handleChange} size="small" checked={HUMOR} name="HUMOR" />}
					/>
					<FormControlLabel
						className="w-fit"
						label="공감툰"
						control={<Checkbox onChange={handleChange} size="small" checked={EMPATHY} name="EMPATHY" />}
					/>
					<FormControlLabel
						className="w-fit"
						label="연애툰"
						control={<Checkbox onChange={handleChange} size="small" checked={DATE} name="DATE" />}
					/>
					<FormControlLabel
						className="w-fit"
						label="힐링툰"
						control={<Checkbox onChange={handleChange} size="small" checked={HEALING} name="HEALING" />}
					/>
				</FormGroup>
				<FormHelperText>최대 3개를 선택해 주세요</FormHelperText>
			</FormControl>
		</Box>
	);
}

export default InstatoonCategory;
