"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import {
	POST_DURATION_MONTH_ITEMS,
	STUDIO_PRICE_FORM_LIMITS,
} from "@/components/mypage/studio/StudioPriceView/defines/constants";
import {
	getDefaultCutsMaxRule,
	getDefaultCutsMinRule,
	getModificationCountMaxRule,
	getModificationCountMinRule,
	getPriceMaxRule,
	getPriceMinRule,
	getWorkingDaysMaxRule,
	getWorkingDaysMinRule,
} from "@/components/mypage/studio/StudioPriceView/defines/rule";
import { RadioProvisionType, StudioPriceFormType } from "@/components/mypage/studio/StudioPriceView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { isNumber } from "@/utils/string";
import { InputAdornment, Typography } from "@mui/material";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";

export interface StudioPriceFormViewProps {}

const counterFieldSx = {
	input: { textAlign: "center" },
};

const radioProvisionTypeArr: RadioProvisionType[] = [
	{
		value: "NONE",
		label: "미제공",
	},
	{
		value: "DEFAULT",
		label: "기본 제공",
	},
	{
		value: "ADDITIONAL",
		label: "추가 제공",
	},
];

function StudioPriceFormView(props: StudioPriceFormViewProps) {
	const {} = props;

	const { TextField, Select } = ReactHookForm<StudioPriceFormType>();

	const form = useForm<StudioPriceFormType>({
		mode: "all",
		defaultValues: {
			service: {
				price: 1000,
				workingDays: 1,
				defaultCuts: 1,
				modificationCount: 1,
				postDurationType: "A_MONTH",
			},
		},
	});

	const { handleSubmit } = form;

	const handleFormSubmit: FormEventHandler = handleSubmit(() => {});

	return (
		<StudioFormView title={"가격 설정"} useFormReturn={form} onSubmit={handleFormSubmit}>
			<Typography variant="h5">서비스</Typography>

			<TextField
				formName="service.price"
				label="금액 (VAT 포함)"
				required
				validator={isNumber}
				rules={{
					...getPriceMinRule(),
					...getPriceMaxRule(),
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
					...getWorkingDaysMinRule(),
					...getWorkingDaysMaxRule(),
				}}
				sx={{ ...counterFieldSx }}
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
					...getDefaultCutsMinRule(),
					...getDefaultCutsMaxRule(),
				}}
				sx={{ ...counterFieldSx }}
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
					...getModificationCountMinRule(),
					...getModificationCountMaxRule(),
				}}
				sx={{ ...counterFieldSx }}
				required
				fullWidth
			/>
			<Select formName="service.postDurationType" label="기본 업로드 횟수" required items={POST_DURATION_MONTH_ITEMS} />
		</StudioFormView>
	);
}

export default StudioPriceFormView;
