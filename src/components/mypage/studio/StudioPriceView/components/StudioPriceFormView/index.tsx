"use client";

import OptionFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceOption";
import ServiceFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceService";
import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import useMutationPostPrice from "@/hooks/queries/studio/useMutationPostPrice";
import useMutationPostPriceTemp from "@/hooks/queries/studio/useMutationPostPriceTemp";
import { Button } from "@mui/material";
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
				postDurationMonthType: "ONE_MONTH",
			},
			option: {
				refinement: {
					provisionType: "UNPROVIDED",
					price: 0,
				},
				additionalPanel: {
					provisionType: "UNPROVIDED",
					price: 0,
					workingDays: 0,
				},
				additionalModification: {
					provisionType: "UNPROVIDED",
					price: 0,
					workingDays: 0,
				},
				postDurationExtension: {
					provisionType: "UNPROVIDED",
					price: 0,
				},
			},
		},
	});

	const { handleSubmit } = form;

	const { mutateAsync: mutatePostPriceTemp } = useMutationPostPriceTemp({});
	const { mutate: mutatePostPrice } = useMutationPostPrice({});

	const handleTempSave: FormEventHandler = handleSubmit(async (data) => {
		try {
			await mutatePostPriceTemp({
				...data,
			});
			// TODO @나은찬 성공 처리
		} catch (e) {
			// TODO @나은찬 예외 처리
			console.log(e);
		}
	});

	const handleFormSubmit: FormEventHandler = handleSubmit((data) => {
		mutatePostPrice(data, {
			onSuccess() {
				// TODO: @나은찬 mui alert 대체
				alert("저장이 완료되었습니다.");
			},
			// TODO: @나은찬 mui alert 대체
			onError({ response }) {
				alert(response?.data.message);
			},
		});
	});

	return (
		<StudioFormView title={"가격 설정"} useFormReturn={form} onSubmit={handleFormSubmit}>
			<ServiceFormView />
			<OptionFormView />
			{/* TODO: @나은찬 임시 저장 버튼 최초 등록 시에만 노출 */}
			<Button variant="outlined" onClick={handleTempSave}>
				임시 저장
			</Button>
			<Button variant="contained" type="submit">
				포트폴리오 저장
			</Button>
		</StudioFormView>
	);
}

export default StudioPriceFormView;
