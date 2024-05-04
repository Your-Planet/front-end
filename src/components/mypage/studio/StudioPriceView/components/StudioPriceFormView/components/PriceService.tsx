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
import { StudioPriceFormType } from "@/components/mypage/studio/StudioPriceView/defines/types";
import { isNumber } from "@/utils/string";
import { InputAdornment, Typography } from "@mui/material";

type Props = {};

function ServiceFormView({}: Props) {
	const { TextField, Select } = ReactHookForm<StudioPriceFormType>();

	return (
		<>
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
				required
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
				required
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
				required
			/>
			<Select
				formName="service.postDurationMonth"
				label="기본 업로드 횟수"
				required
				items={POST_DURATION_MONTH_ITEMS}
			/>
		</>
	);
}

export default ServiceFormView;
