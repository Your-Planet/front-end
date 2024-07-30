"use client";

import { ProvisionType } from "@/apis/studio";
import ReactHookForm from "@/components/common/ReactHookForm";
import { PROVISION_RADIOS, STUDIO_PRICE_FORM_LIMITS } from "@/components/studio/StudioPriceView/defines/constants";
import {
	modificationCountMaxRule,
	modificationCountMinRule,
	priceMaxRule,
	priceMinRule,
	workingDaysMaxRule,
	workingDaysMinRule,
} from "@/components/studio/StudioPriceView/defines/rule";
import { StudioPriceForm } from "@/components/studio/StudioPriceView/defines/types";
import { LABEL_BY_SERVICE_OPTION_TYPE } from "@/defines/price/constants";
import { isNumber } from "@/utils/string";
import { Box, InputAdornment, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

function OptionFormView() {
	const { TextField, RadioGroup } = ReactHookForm<StudioPriceForm>();
	const { watch } = useFormContext();

	const [
		refinementProvision,
		additionalPanelProvision,
		additionalModificationProvision,
		postDurationExtensionProvision,
		originFileProvision,
	] = watch([
		"option.refinement.provisionType",
		"option.additionalPanel.provisionType",
		"option.additionalModification.provisionType",
		"option.postDurationExtension.provisionType",
		"option.originFile.provisionType",
	]);

	const isDisabled = (target: ProvisionType) => target !== "PROVIDED";

	return (
		<>
			<Typography variant="h5">옵션</Typography>

			<Box>
				<RadioGroup<ProvisionType>
					label={LABEL_BY_SERVICE_OPTION_TYPE.refinement}
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
					required={!isDisabled(refinementProvision)}
					rules={
						!isDisabled(refinementProvision)
							? {
									...priceMinRule,
									...priceMaxRule,
								}
							: {}
					}
					fullWidth
				/>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label={LABEL_BY_SERVICE_OPTION_TYPE.additionalPanel}
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
						required={!isDisabled(additionalPanelProvision)}
						rules={
							!isDisabled(additionalPanelProvision)
								? {
										...priceMinRule,
										...priceMaxRule,
									}
								: {}
						}
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
						required={!isDisabled(additionalPanelProvision)}
						rules={
							!isDisabled(additionalPanelProvision)
								? {
										...workingDaysMinRule,
										...workingDaysMaxRule,
									}
								: {}
						}
						fullWidth
					/>
				</Box>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label={LABEL_BY_SERVICE_OPTION_TYPE.additionalModification}
					formName="option.additionalModification.provisionType"
					radios={PROVISION_RADIOS}
					row
				/>
				<Box display="flex" gap={1}>
					<TextField
						formName="option.additionalModification.price"
						label="1회 당 추가 비용"
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
						required={!isDisabled(additionalModificationProvision)}
						rules={
							!isDisabled(additionalModificationProvision)
								? {
										...priceMinRule,
										...priceMaxRule,
									}
								: {}
						}
						fullWidth
					/>
					<TextField
						formName="option.additionalModification.workingDays"
						label="수정 횟수"
						type="number"
						InputProps={{
							endAdornment: <InputAdornment position="end">회</InputAdornment>,
							inputProps: {
								min: STUDIO_PRICE_FORM_LIMITS.service.modificationCount.min,
								max: STUDIO_PRICE_FORM_LIMITS.service.modificationCount.max,
							},
						}}
						size="small"
						disabled={isDisabled(additionalModificationProvision)}
						required={!isDisabled(additionalModificationProvision)}
						rules={
							!isDisabled(additionalModificationProvision)
								? {
										...modificationCountMinRule,
										...modificationCountMaxRule,
									}
								: {}
						}
						fullWidth
					/>
				</Box>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label={LABEL_BY_SERVICE_OPTION_TYPE.postDurationExtension}
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
					required={!isDisabled(postDurationExtensionProvision)}
					rules={
						!isDisabled(postDurationExtensionProvision)
							? {
									...priceMinRule,
									...priceMaxRule,
								}
							: {}
					}
					fullWidth
				/>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label={LABEL_BY_SERVICE_OPTION_TYPE.originFile}
					formName="option.originFile.provisionType"
					radios={PROVISION_RADIOS}
					row
				/>
				<TextField
					formName="option.originFile.price"
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
					disabled={isDisabled(originFileProvision)}
					required={!isDisabled(originFileProvision)}
					rules={
						!isDisabled(originFileProvision)
							? {
									...priceMinRule,
									...priceMaxRule,
								}
							: {}
					}
					fullWidth
				/>
			</Box>
		</>
	);
}

export default OptionFormView;
