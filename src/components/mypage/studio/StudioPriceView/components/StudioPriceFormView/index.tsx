"use client";

import OptionFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceOption";
import ServiceFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceService";
import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { FormEventHandler } from "react";
import { useForm } from "react-hook-form";

export interface StudioPriceFormViewProps {}

function StudioPriceFormView(props: StudioPriceFormViewProps) {
	const {} = props;

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

	const { handleSubmit } = form;

	const handleFormSubmit: FormEventHandler = handleSubmit(() => {});

	return (
		<StudioFormView title={"가격 설정"} useFormReturn={form} onSubmit={handleFormSubmit}>
			<ServiceFormView />
			<OptionFormView />
		</StudioFormView>
	);
}

export default StudioPriceFormView;
