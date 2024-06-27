"use client";

import { BUDGET_SELECT_BOX_WIDTH } from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/defines/constants";
import useRouterPushWithParams from "@/components/search/hooks/useRouterPushWithParams";
import useOpen from "@/hooks/common/useOpen";
import { isNumber } from "@/utils/string";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {
	Box,
	Button,
	FormControl,
	FormHelperText,
	InputLabel,
	MenuItem,
	Select,
	TextField,
	Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {};

function BudgetFilter({}: Props) {
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const { opened, handleOpen, handleClose } = useOpen(false);
	const [minValue, setMinValue] = useState<number>(Number(searchParams.get("min")) ?? 0);
	const [maxValue, setMaxValue] = useState<number>(Number(searchParams.get("max")) ?? 0);
	const [isError, setIsError] = useState<boolean>(maxValue < minValue);

	useEffect(() => {
		setMinValue(Number(searchParams.get("min")) ?? 0);
		setMaxValue(Number(searchParams.get("max")) ?? 0);
		setIsError(false);
	}, [searchParams]);

	const handleChangeMin = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { value } = event.target;

		if (isNumber(value)) {
			event.preventDefault();
			setMinValue(Number(value));

			if (maxValue < minValue) {
				setIsError(true);
			} else {
				setIsError(false);
			}
		}
	};

	const handleChangeMax = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { value } = event.target;

		if (isNumber(value)) {
			event.preventDefault();
			setMaxValue(Number(value));
		}
	};

	const handleClickApplyButton = () => {
		if (!isError) {
			routerPushWithParams(["min", "max"], [minValue.toString(), maxValue.toString()]);
			handleClose();
		}
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
				open={opened}
				onOpen={handleOpen}
				onClose={handleClose}
			>
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
						<Typography variant="body2" whiteSpace="pre-line" align="center">
							<InfoOutlinedIcon
								sx={{ fontSize: "1rem", verticalAlign: "middle", marginRight: "3px", marginBottom: "3px" }}
							/>
							{`기본 서비스 가격을 기준으로 검색되며,\n선택하시는 옵션에 따라 견적이 상이해질 수 있습니다`}
						</Typography>
					</Box>
				</Box>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
					}}
				>
					<Box display="flex">
						<MenuItem disableRipple disableTouchRipple>
							<TextField type="tel" label="최소" size="small" value={minValue} onChange={handleChangeMin} />
						</MenuItem>
						<Typography>~</Typography>
						<MenuItem disableRipple disableTouchRipple>
							<TextField type="tel" label="최대" size="small" value={maxValue} onChange={handleChangeMax} />
						</MenuItem>
					</Box>
					<FormHelperText error={isError} sx={{ paddingLeft: "1rem" }}>
						{isError ? `최솟값은 최댓값보다 작아야 합니다.` : " "}
					</FormHelperText>
				</Box>

				<Box sx={{ display: "flex", gap: ".5rem", justifyContent: "right", paddingX: "1rem" }}>
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
