"use client";

import { BUDGET_SELECT_BOX_WIDTH } from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/defines/constants";
import useRouterPushWithParams from "@/components/search/hooks/useRouterPushWithParams";
import { isNumber } from "@/utils/string";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useState } from "react";

type Props = {};

function BudgetFilter({}: Props) {
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const [open, setOpen] = useState<boolean>(false);
	const [minValue, setMinValue] = useState<string>(searchParams.get("min") ?? "0");
	const [maxValue, setMaxValue] = useState<string>(searchParams.get("max") ?? "0");

	const handleOpen = () => setOpen(true);

	const handleClose = () => setOpen(false);

	const handleChangeMin = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { value } = event.target;

		if (isNumber(value)) {
			event.preventDefault();
			setMinValue(value);
		}
	};

	const handleChangeMax = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { value } = event.target;

		if (isNumber(value)) {
			event.preventDefault();
			setMaxValue(value);
		}
	};

	const handleClickApplyButton = () => {
		routerPushWithParams(["min", "max"], [minValue, maxValue]);
		setOpen(false);
	};

	return (
		<FormControl>
			<InputLabel />
			<Select
				multiple
				value={[]}
				size="small"
				displayEmpty
				renderValue={() => "예산"}
				sx={{
					width: `${BUDGET_SELECT_BOX_WIDTH}px`,
				}}
				open={open}
				onOpen={handleOpen}
				onClose={handleClose}
			>
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<MenuItem disableRipple disableTouchRipple>
						<TextField label="최소" size="small" value={minValue} onChange={handleChangeMin} />
					</MenuItem>
					<Typography>~</Typography>
					<MenuItem disableRipple disableTouchRipple>
						<TextField label="최대" size="small" value={maxValue} onChange={handleChangeMax} />
					</MenuItem>
				</Box>

				<Box
					sx={{
						padding: "1rem",
						color: grey[600],
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							backgroundColor: grey[200],
							border: `1px solid ${grey[500]}`,
							borderRadius: "0.5rem",
							paddingY: "0.2rem",
						}}
					>
						<Stack alignItems="center" direction="row" gap="3px">
							<InfoOutlinedIcon sx={{ fontSize: "1rem" }} />
							<Typography variant="body2">기본 서비스 가격을 기준으로 검색되며,</Typography>
						</Stack>
						<Typography variant="body2">선택하시는 옵션에 따라 견적이 상이해질 수 있습니다</Typography>
					</Box>
				</Box>

				<Box sx={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
					<Button variant="outlined" onClick={handleClose}>
						취소
					</Button>
					<Button variant="contained" onClick={handleClickApplyButton}>
						적용
					</Button>
				</Box>
			</Select>
		</FormControl>
	);
}

export default BudgetFilter;
