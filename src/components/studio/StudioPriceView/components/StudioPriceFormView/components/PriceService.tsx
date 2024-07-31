"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import {
	POST_DURATION_MONTH_ITEMS,
	STUDIO_PRICE_FORM_LIMITS,
} from "@/components/studio/StudioPriceView/defines/constants";
import {
	defaultCutsMaxRule,
	defaultCutsMinRule,
	modificationCountMaxRule,
	modificationCountMinRule,
	priceMaxRule,
	priceMinRule,
	workingDaysMaxRule,
	workingDaysMinRule,
} from "@/components/studio/StudioPriceView/defines/rule";
import { StudioPriceForm } from "@/components/studio/StudioPriceView/defines/types";
import { isNumber } from "@/utils/string";
import { InputAdornment, Typography } from "@mui/material";

type Props = {};

function ServiceFormView({}: Props) {
	const { TextField, Select } = ReactHookForm<StudioPriceForm>();

	return (
		<>
			<Typography variant="h5">서비스</Typography>

			<TextField
				formName="service.price"
				label="금액 (VAT 포함)"
				required
				validator={isNumber}
				rules={{
					...priceMinRule,
					...priceMaxRule,
				}}
				InputProps={{
					endAdornment: <InputAdornment position="end">원</InputAdornment>,
				}}
			/>
			<TextField
				formName="service.workingDays"
				label="작업 기간"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">일</InputAdornment>,
					inputProps: {
						min: STUDIO_PRICE_FORM_LIMITS.service.workingDays.min,
						max: STUDIO_PRICE_FORM_LIMITS.service.workingDays.max,
					},
				}}
				rules={{
					...workingDaysMinRule,
					...workingDaysMaxRule,
				}}
				required
				fullWidth
			/>
			<TextField
				formName="service.defaultCuts"
				label="기본 컷 수"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">장</InputAdornment>,
					inputProps: {
						min: STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.min,
						max: STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.max,
					},
				}}
				rules={{
					...defaultCutsMinRule,
					...defaultCutsMaxRule,
				}}
				required
				fullWidth
			/>
			<TextField
				formName="service.modificationCount"
				label="기본 수정 횟수"
				type="number"
				InputProps={{
					endAdornment: <InputAdornment position="end">회</InputAdornment>,
					inputProps: {
						min: STUDIO_PRICE_FORM_LIMITS.service.modificationCount.min,
						max: STUDIO_PRICE_FORM_LIMITS.service.modificationCount.max,
					},
				}}
				rules={{
					...modificationCountMinRule,
					...modificationCountMaxRule,
				}}
				required
				fullWidth
			/>
			<Select
				formName="service.postDurationMonthType"
				label="기본 업로드 횟수"
				required
				items={POST_DURATION_MONTH_ITEMS}
			/>
		</>
	);
}

export default ServiceFormView;
