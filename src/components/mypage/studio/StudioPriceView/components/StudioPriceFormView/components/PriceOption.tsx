import ReactHookForm from "@/components/common/ReactHookForm";
import { PROVISION_RADIOS } from "@/components/mypage/studio/StudioPriceView/defines/constants";
import {
	getPriceMaxRule,
	getPriceMinRule,
	getWorkingDaysMaxRule,
	getWorkingDaysMinRule,
} from "@/components/mypage/studio/StudioPriceView/defines/rule";
import { ProvisionType, StudioPriceFormType } from "@/components/mypage/studio/StudioPriceView/defines/types";
import { isNumber } from "@/utils/string";
import { Box, InputAdornment, Typography } from "@mui/material";
import { useFormContext } from "react-hook-form";

type Props = {};

function OptionFormView(props: Props) {
	const { TextField, RadioGroup } = ReactHookForm<StudioPriceFormType>();
	const { watch } = useFormContext();

	const [
		refinementProvision,
		additionalPanelProvision,
		additionalModificationProvision,
		postDurationExtensionProvision,
	] = watch([
		"option.refinement.provision",
		"option.additionalPanel.provision",
		"option.additionalModification.provision",
		"option.postDurationExtension.provision",
	]);

	const isDisabled = (target: ProvisionType) => target !== "ADDITIONAL";

	return (
		<>
			<Typography variant="h5">옵션</Typography>

			<Box>
				<RadioGroup<ProvisionType>
					label="2차 가공"
					formName="option.refinement.provision"
					radios={PROVISION_RADIOS}
					row
				/>
				<TextField
					formName="option.refinement.price"
					label="추가 비용"
					validator={isNumber}
					InputProps={{
						endAdornment: <InputAdornment position="end">원</InputAdornment>,
					}}
					size="small"
					disabled={isDisabled(refinementProvision)}
					required={!isDisabled(refinementProvision)}
					rules={{
						...getPriceMinRule(),
						...getPriceMaxRule(),
					}}
					fullWidth
				/>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label="컷 수 추가"
					formName="option.additionalPanel.provision"
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
						}}
						size="small"
						disabled={isDisabled(additionalPanelProvision)}
						required={!isDisabled(additionalPanelProvision)}
						rules={{
							...getPriceMinRule(),
							...getPriceMaxRule(),
						}}
						fullWidth
					/>
					<TextField
						formName="option.additionalPanel.workingDays"
						label="작업 기간"
						type="number"
						InputProps={{
							endAdornment: <InputAdornment position="end">일</InputAdornment>,
						}}
						size="small"
						disabled={isDisabled(additionalPanelProvision)}
						required={!isDisabled(additionalPanelProvision)}
						rules={{
							...getWorkingDaysMinRule(),
							...getWorkingDaysMaxRule(),
						}}
						fullWidth
					/>
				</Box>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label="수정 횟수 추가"
					formName="option.additionalModification.provision"
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
						}}
						size="small"
						disabled={isDisabled(additionalModificationProvision)}
						required={!isDisabled(additionalModificationProvision)}
						rules={{
							...getPriceMinRule(),
							...getPriceMaxRule(),
						}}
						fullWidth
					/>
					<TextField
						formName="option.additionalModification.workingDays"
						label="작업 기간"
						type="number"
						InputProps={{
							endAdornment: <InputAdornment position="end">일</InputAdornment>,
						}}
						size="small"
						disabled={isDisabled(additionalModificationProvision)}
						required={!isDisabled(additionalModificationProvision)}
						rules={{
							...getWorkingDaysMinRule(),
							...getWorkingDaysMaxRule(),
						}}
						fullWidth
					/>
				</Box>
			</Box>
			<Box>
				<RadioGroup<ProvisionType>
					label="업로드 기간 연장"
					formName="option.postDurationExtension.provision"
					radios={PROVISION_RADIOS}
					row
				/>
				<TextField
					formName="option.postDurationExtension.price"
					label="1개월 당 추가 비용"
					validator={isNumber}
					InputProps={{
						endAdornment: <InputAdornment position="end">원</InputAdornment>,
					}}
					size="small"
					disabled={isDisabled(postDurationExtensionProvision)}
					required={!isDisabled(postDurationExtensionProvision)}
					rules={{
						...getPriceMinRule(),
						...getPriceMaxRule(),
					}}
					fullWidth
				/>
			</Box>
		</>
	);
}

export default OptionFormView;
