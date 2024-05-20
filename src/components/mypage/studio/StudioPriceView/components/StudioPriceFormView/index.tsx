"use client";

import CentralBox from "@/components/common/CentralBox";
import OptionFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceOption";
import ServiceFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceService";
import StudioPriceLoading from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/StudioPriceLoading";
import useLoadStudioPrice from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/hooks/useLoadStudioPrice";
import useSaveStudioPrice from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/hooks/useSaveStudioPrice";
import useSaveStudioPriceTemp from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/hooks/useSaveStudioPriceTemp";
import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { STUDIO_VIEW_PADDING } from "@/components/mypage/studio/defines/constants";
import { LoadingButton } from "@mui/lab";
import { Box } from "@mui/material";
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

	const { isPrice, isLoading } = useLoadStudioPrice({ form });

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
					<LoadingButton
						variant="outlined"
						type="button"
						onClick={handleStudioPriceTempSave}
						loading={isTempSaving}
						hidden={isPrice}
					>
						임시 저장
					</LoadingButton>
					<LoadingButton variant="contained" type="submit" loading={isSaving}>
						포트폴리오 저장
					</LoadingButton>
				</StudioFormView>
			</Box>
		</FormProvider>
	);
}

export default StudioPriceFormView;
