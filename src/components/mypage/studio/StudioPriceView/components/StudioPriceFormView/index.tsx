"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import {
	POST_DURATION_MONTH_ITEMS,
	PROVISION_RADIOS,
	STUDIO_PRICE_FORM_LIMITS,
} from "@/components/mypage/studio/StudioPriceView/defines/constants";
import {
	defaultCutsMaxRule,
	defaultCutsMinRule,
	modificationCountMaxRule,
	modificationCountMinRule,
	priceMaxRule,
	priceMinRule,
	workingDaysMaxRule,
	workingDaysMinRule,
} from "@/components/mypage/studio/StudioPriceView/defines/rule";
import { Provision, StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { isNumber } from "@/utils/string";
import { Box, InputAdornment, Typography } from "@mui/material";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";

export interface StudioPriceFormViewProps {}

const counterFieldSx = {
	input: { textAlign: "center" },
};

function StudioPriceFormView(props: StudioPriceFormViewProps) {
	const {} = props;

	const { TextField, RadioGroup, Select } = ReactHookForm<StudioPriceForm>();

	const form = useForm<StudioPriceForm>({
		mode: "all",
		defaultValues: {
			service: {
				price: 1000,
				workingDays: 1,
				defaultCuts: 1,
				modificationCount: 1,
				postDurationMonth: "A_MONTH",
			},
			option: {
				refinement: {
					provisionType: "NONE",
					price: 0,
				},
				additionalPanel: {
					provisionType: "NONE",
					price: 0,
					workingDays: 0,
				},
				additionalModification: {
					provisionType: "NONE",
					price: 0,
					workingDays: 0,
				},
				postDurationExtension: {
					provisionType: "NONE",
					price: 0,
				},
			},
		},
	});

	const { handleSubmit, watch } = form;

	const handleFormSubmit: FormEventHandler = handleSubmit(() => {});

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

	const isDisabled = (target: Provision) => target !== "ADDITIONAL";

	return (
		<StudioFormView title={"가격 설정"} useFormReturn={form} onSubmit={handleFormSubmit}>
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
					...defaultCutsMinRule,
					...defaultCutsMaxRule,
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
					...modificationCountMinRule,
					...modificationCountMaxRule,
				}}
				sx={{ ...counterFieldSx }}
				required
				fullWidth
			/>
			<Select
				formName="service.postDurationMonth"
				label="기본 업로드 횟수"
				required
				items={POST_DURATION_MONTH_ITEMS}
			/>

			<Typography variant="h5">옵션</Typography>

			<Box>
				<RadioGroup<Provision>
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
				/>
			</Box>
			<Box>
				<RadioGroup<Provision>
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
				<RadioGroup<Provision>
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
				<RadioGroup<Provision>
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
				/>
			</Box>
		</StudioFormView>
	);
}

export default StudioPriceFormView;
