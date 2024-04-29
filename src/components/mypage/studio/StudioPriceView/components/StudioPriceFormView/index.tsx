"use client";

import ReactHookForm from "@/components/common/ReactHookForm";
import { inputPropsInCounterField } from "@/components/common/ReactHookForm/components/CounterField/defines/styles";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import {
	labelByPostDurationMonthType,
	StudioPriceForm,
} from "@/components/mypage/studio/StudioPriceView/defines/types";
import { Typography } from "@mui/material";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";

export interface StudioPriceFormViewProps {}

const getMenuItems = () => {
	return Object.entries(labelByPostDurationMonthType).map((month) => {
		return { value: month[0], label: month[1] };
	});
};

function StudioPriceFormView(props: StudioPriceFormViewProps) {
	const {} = props;

	const { TextField, CounterField, DropdownMenu } = ReactHookForm<StudioPriceForm>();

	const form = useForm<StudioPriceForm>({
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

			<TextField formName="service.price" label="금액 (VAT 포함)" required />
			<CounterField formName="service.workingDays" label="작업 기간" value={1} min={1} max={30} required fullWidth />
			<CounterField
				formName="service.defaultCuts"
				label="기본 컷 수"
				value={1}
				min={1}
				max={10}
				InputProps={{ readOnly: true }}
				required
				fullWidth
			/>
			<CounterField
				formName="service.modificationCount"
				label="기본 수정 횟수"
				value={1}
				min={1}
				max={30}
				inputProps={{ ...inputPropsInCounterField }}
				required
				fullWidth
			/>
			<DropdownMenu formName="service.postDurationType" label="기본 업로드 횟수" required items={getMenuItems()} />
		</StudioFormView>
	);
}

export default StudioPriceFormView;
