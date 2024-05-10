"use client";

import OptionFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceOption";
import ServiceFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceService";
import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import useMutationPostPriceTemp from "@/hooks/queries/studio/useMutationPostPriceTemp";
import { enqueueClosableSnackbar } from "@/utils/snackbar";
import { LoadingButton } from "@mui/lab";
import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
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

	const { mutateAsync: mutatePostPriceTemp, isPending: isSaving } = useMutationPostPriceTemp({});

	const handleTempSaveSuccess = () => {
		enqueueSnackbar({
			message: "가격 설정을 임시 저장했어요.",
			variant: "success",
		});
	};

	const handleError = (e: unknown) => {
		console.error("error", e);

		const message: string = (() => {
			const DEFAULT_MESSAGE = "처리 중 오류가 발생했습니다.";

			if (e instanceof AxiosError) {
				return e?.response?.data.message ?? DEFAULT_MESSAGE;
			}
			if (e instanceof Error) {
				return e.message ?? DEFAULT_MESSAGE;
			}
			return DEFAULT_MESSAGE;
		})();

		enqueueClosableSnackbar({
			message,
			variant: "error",
		});
	};

	const handleTempSave: FormEventHandler = handleSubmit(async (data) => {
		try {
			await mutatePostPriceTemp(data);

			handleTempSaveSuccess();
		} catch (e) {
			handleError(e);
		}
	});

	const handleFormSubmit: FormEventHandler = handleSubmit(() => {});

	return (
		<StudioFormView title={"가격 설정"} useFormReturn={form} onSubmit={handleFormSubmit}>
			<ServiceFormView />
			<OptionFormView />
			{/* TODO: @나은찬 임시 저장 버튼 최초 등록 시에만 노출 */}
			<LoadingButton variant="outlined" onClick={handleTempSave} loading={isSaving}>
				임시 저장
			</LoadingButton>
		</StudioFormView>
	);
}

export default StudioPriceFormView;
