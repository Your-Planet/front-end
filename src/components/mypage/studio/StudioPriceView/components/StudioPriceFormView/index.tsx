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
import { LoadingButton } from "@mui/lab";
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

	const handleTempSaveSuccess = () => {
		enqueueSnackbar({
			message: "포트폴리오를 임시 저장했어요.",
			variant: "success",
		});
	};

	const handleSaveSuccess = () => {
		enqueueSnackbar({
			message: "포트폴리오를 저장했어요.",
			variant: "success",
		});
	};

	const handleTempSave: FormEventHandler = async () => {
		try {
			const data = {
				service: getValues("service"),
				option: getValues("option"),
			};

			await mutatePostPriceTemp(data);

			handleTempSaveSuccess();
		} catch (e) {
			handleCommonError(e);
		}
	};

	const handleFormSubmit: FormEventHandler = handleSubmit((data) => {
		mutatePostPrice(data, {
			onSuccess: handleSaveSuccess,
			onError: (e) => handleCommonError(e),
		});
	});

	if (isLoading) {
		return (
			<CentralBox>
				<StudioPriceLoading />
			</CentralBox>
		);
	}

	return (
		<StudioFormView title={"가격 설정"} useFormReturn={form} onSubmit={handleStudioPriceSaveSubmit}>
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
	);
}

export default StudioPriceFormView;
