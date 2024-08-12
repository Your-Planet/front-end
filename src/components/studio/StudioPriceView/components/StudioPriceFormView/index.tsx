"use client";

import CentralBox from "@/components/common/CentralBox";
import OptionFormView from "@/components/studio/StudioPriceView/components/StudioPriceFormView/components/PriceOption";
import ServiceFormView from "@/components/studio/StudioPriceView/components/StudioPriceFormView/components/PriceService";
import StudioPriceLoading from "@/components/studio/StudioPriceView/components/StudioPriceFormView/components/StudioPriceLoading";
import useLoadStudioPrice from "@/components/studio/StudioPriceView/components/StudioPriceFormView/hooks/useLoadStudioPrice";
import useSaveStudioPrice from "@/components/studio/StudioPriceView/components/StudioPriceFormView/hooks/useSaveStudioPrice";
import useSaveStudioPriceTemp from "@/components/studio/StudioPriceView/components/StudioPriceFormView/hooks/useSaveStudioPriceTemp";
import { StudioPriceForm } from "@/components/studio/StudioPriceView/defines/types";
import StudioFormView from "@/components/studio/components/StudioFormView";
import { STUDIO_VIEW_PADDING } from "@/components/studio/defines/constants";
import { LoadingButton } from "@mui/lab";
import { Alert, Box } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";

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
				originFile: {
					provisionType: "UNPROVIDED",
					price: 0,
				},
			},
		},
	});

	const { isSavedPriceData, isLoading } = useLoadStudioPrice({ form });

	const { isTempSaving, handleStudioPriceTempSave } = useSaveStudioPriceTemp({ form });
	const { isSaving, handleStudioPriceSaveSubmit } = useSaveStudioPrice({ form });

	if (isLoading) {
		return (
			<CentralBox>
				<StudioPriceLoading />
			</CentralBox>
		);
	}

	return (
		<FormProvider {...form}>
			<Box
				sx={{
					padding: `${STUDIO_VIEW_PADDING.vertical}px ${STUDIO_VIEW_PADDING.horizontal}px`,
				}}
			>
				<StudioFormView title={"가격 설정"} onSubmit={handleStudioPriceSaveSubmit}>
					<ServiceFormView />
					<OptionFormView />
					{!isSavedPriceData && (
						<LoadingButton variant="outlined" type="button" onClick={handleStudioPriceTempSave} loading={isTempSaving}>
							임시 저장
						</LoadingButton>
					)}
					<LoadingButton variant="contained" type="submit" loading={isSaving}>
						포트폴리오 저장
					</LoadingButton>
					{!isSavedPriceData && (
						<Alert severity={"info"}>저장 버튼 클릭 시, 바로 작가 찾기 페이지에서 작가님의 프로필이 노출돼요!</Alert>
					)}
				</StudioFormView>
			</Box>
		</FormProvider>
	);
}

export default StudioPriceFormView;
