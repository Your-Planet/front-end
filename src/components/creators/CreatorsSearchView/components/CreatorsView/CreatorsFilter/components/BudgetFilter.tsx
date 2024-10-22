"use client";

import { BUDGET_SELECT_BOX_WIDTH } from "@/components/creators/CreatorsSearchView/components/CreatorsView/CreatorsFilter/defines/constants";
import {
	StyledBoxInBudgetFilter,
	StyledFormHelperText,
	StyledInfoOutlinedIcon,
	StyledSwapHorizRounded,
	StyledTextFieldInBudgetFilter,
} from "@/components/creators/CreatorsSearchView/components/CreatorsView/CreatorsFilter/defines/styles";
import { useCreatorsSearchParams } from "@/components/creators/CreatorsSearchView/hooks/useCreatorsSearchParams";
import useRouterPushWithParams from "@/components/creators/CreatorsSearchView/hooks/useRouterPushWithParams";
import useOpen from "@/hooks/common/useOpen";
import { isNumber } from "@/utils/string";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

type Props = {};

function BudgetFilter({}: Props) {
	const routerPushWithParams = useRouterPushWithParams();
	const { getMinValueFromURL, getMaxValueFromURL } = useCreatorsSearchParams();
	const searchParams = useSearchParams();
	const { opened, handleOpen, handleClose } = useOpen(false);
	const [minValue, setMinValue] = useState<Number>(getMinValueFromURL());
	const [maxValue, setMaxValue] = useState<Number>(getMaxValueFromURL());
	const [isError, setIsError] = useState<boolean>(maxValue < minValue);

	useEffect(() => {
		setMinValue(getMinValueFromURL());
		setMaxValue(getMaxValueFromURL());
		setIsError(false);
	}, [searchParams]);

	useEffect(() => {
		if (maxValue < minValue) {
			setIsError(true);
		} else {
			setIsError(false);
		}
	}, [minValue, maxValue]);

	const handleChangeMin = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { value } = event.target;

		if (!value) {
			setMinValue(0);
			setIsError(false);
			return;
		}

		if (isNumber(value)) {
			setMinValue(parseInt(value, 10));
		}
	};

	const handleChangeMax = (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
		const { value } = event.target;

		if (!value) {
			setMaxValue(0);
			setIsError(false);
			return;
		}

		if (isNumber(value)) {
			setMaxValue(parseInt(value, 10));
		}
	};

	const handleClickApplyButton = () => {
		if (!isError) {
			routerPushWithParams(["min", "max"], [minValue.toString(), maxValue.toString()]);
			handleClose();
		}
	};

	const handleClickSwapBox = () => {
		setMinValue(maxValue);
		setMaxValue(minValue);
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
				<Box padding="1rem" color={grey[600]}>
					<StyledBoxInBudgetFilter>
						<Typography variant="body2" whiteSpace="pre-line" align="center">
							<StyledInfoOutlinedIcon />
							{`기본 서비스 가격을 기준으로 검색되며,\n선택하시는 옵션에 따라 견적이 상이해질 수 있습니다`}
						</Typography>
					</StyledBoxInBudgetFilter>
				</Box>

				<Box display="flex" flexDirection="column">
					<Box display="flex" alignItems="center">
						<MenuItem disableRipple disableTouchRipple>
							<StyledTextFieldInBudgetFilter
								type="number"
								label="최소"
								size="small"
								value={minValue.toString()}
								onChange={handleChangeMin}
							/>
						</MenuItem>
						<Typography>~</Typography>
						<MenuItem disableRipple disableTouchRipple>
							<StyledTextFieldInBudgetFilter
								type="number"
								label="최대"
								size="small"
								value={maxValue.toString()}
								onChange={handleChangeMax}
							/>
						</MenuItem>
					</Box>

					<Box display="flex" alignItems="center" gap="2px">
						<StyledFormHelperText error={isError} sx={{ paddingLeft: "1rem" }}>
							{isError ? `최솟값은 최댓값보다 작아야 합니다.` : " "}
						</StyledFormHelperText>
						<Box
							display="flex"
							alignItems="center"
							sx={{ "&:hover": { cursor: "pointer" } }}
							onClick={handleClickSwapBox}
						>
							<StyledSwapHorizRounded visibility={isError ? "visible" : "hidden"} />
							<StyledFormHelperText>{isError ? `바꾸기` : " "}</StyledFormHelperText>
						</Box>
					</Box>
				</Box>

				<Box display="flex" gap=".5rem" justifyContent="right" paddingX="1rem">
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
