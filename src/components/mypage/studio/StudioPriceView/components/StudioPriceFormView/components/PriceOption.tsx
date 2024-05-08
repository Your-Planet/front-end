"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import {
	PROVISION_RADIOS,
	STUDIO_PRICE_FORM_LIMITS,
} from "@/components/mypage/studio/StudioPriceView/defines/constants";
import { ProvisionType, StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import { isNumber } from "@/utils/string";
import { Box, InputAdornment, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

type Props = {};

function OptionFormView(props: Props) {
	const { TextField, RadioGroup } = ReactHookForm<StudioPriceForm>();
	const { watch } = useFormContext();

	const [
		refinementProvision,
		additionalPanelProvision,
		additionalModificationProvision,
		postDurationExtensionProvision,
	] = watch([
		"option.refinement.provisionType",
		"option.additionalPanel.provisionType",
		"option.additionalModification.provisionType",
		"option.postDurationExtension.provisionType",
	]);

	const isDisabled = (target: ProvisionType) => target !== "ADDITIONAL";

	return (
		<>
			<Typography variant="h5">옵션</Typography>

			<Box>
				<RadioGroup<ProvisionType>
					label="2차 가공"
					formName="option.refinement.provisionType"
					radios={PROVISION_RADIOS}
					row
				/>
				<TextField
					formName="option.refinement.price"
					label="추가 비용"
					validator={isNumber}
					InputProps={{
						endAdornment: <InputAdornment position="end">원</InputAdornment>,
						inputProps: {
							min: STUDIO_PRICE_FORM_LIMITS.service.price.min,
							max: STUDIO_PRICE_FORM_LIMITS.service.price.max,
						},
					}}
					size="small"
					disabled={isDisabled(refinementProvision)}
					fullWidth
				/>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label="컷 수 추가"
					formName="option.additionalPanel.provisionType"
					radios={PROVISION_RADIOS}
					row
				/>
				<Box display="flex" gap={1}>
					<TextField
						formName="option.additionalPanel.price"
						label="1컷 당 추가 비용"
						validator={isNumber}
						InputProps={{
							endAdornment: <InputAdornment position="end">원</InputAdornment>,
							inputProps: {
								min: STUDIO_PRICE_FORM_LIMITS.service.price.min,
								max: STUDIO_PRICE_FORM_LIMITS.service.price.max,
							},
						}}
						size="small"
						disabled={isDisabled(additionalPanelProvision)}
						fullWidth
					/>
					<TextField
						formName="option.additionalPanel.workingDays"
						label="작업 기간"
						type="number"
						InputProps={{
							endAdornment: <InputAdornment position="end">일</InputAdornment>,
							inputProps: {
								min: STUDIO_PRICE_FORM_LIMITS.service.workingDays.min,
								max: STUDIO_PRICE_FORM_LIMITS.service.workingDays.max,
							},
						}}
						size="small"
						disabled={isDisabled(additionalPanelProvision)}
						fullWidth
					/>
				</Box>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label="수정 횟수 추가"
					formName="option.additionalModification.provisionType"
					radios={PROVISION_RADIOS}
					row
				/>
				<Box display="flex" gap={1}>
					<TextField
						formName="option.additionalModification.price"
						label="1컷 당 추가 비용"
						validator={isNumber}
						InputProps={{
							endAdornment: <InputAdornment position="end">원</InputAdornment>,
							inputProps: {
								min: STUDIO_PRICE_FORM_LIMITS.service.price.min,
								max: STUDIO_PRICE_FORM_LIMITS.service.price.max,
							},
						}}
						size="small"
						disabled={isDisabled(additionalModificationProvision)}
						fullWidth
					/>
					<TextField
						formName="option.additionalModification.workingDays"
						label="작업 기간"
						type="number"
						InputProps={{
							endAdornment: <InputAdornment position="end">일</InputAdornment>,
							inputProps: {
								min: STUDIO_PRICE_FORM_LIMITS.service.workingDays.min,
								max: STUDIO_PRICE_FORM_LIMITS.service.workingDays.max,
							},
						}}
						size="small"
						disabled={isDisabled(additionalModificationProvision)}
						fullWidth
					/>
				</Box>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label="업로드 기간 연장"
					formName="option.postDurationExtension.provisionType"
					radios={PROVISION_RADIOS}
					row
				/>
				<TextField
					formName="option.postDurationExtension.price"
					label="1개월 당 추가 비용"
					validator={isNumber}
					InputProps={{
						endAdornment: <InputAdornment position="end">원</InputAdornment>,
						inputProps: {
							min: STUDIO_PRICE_FORM_LIMITS.service.price.min,
							max: STUDIO_PRICE_FORM_LIMITS.service.price.max,
						},
					}}
					size="small"
					disabled={isDisabled(postDurationExtensionProvision)}
					fullWidth
				/>
			</Box>
		</>
	);
}

export default OptionFormView;
