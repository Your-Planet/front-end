import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import useMutationPostPrice from "@/hooks/queries/studio/useMutationPostPrice";
import { handleCommonError } from "@/utils/error";
import { enqueueSnackbar } from "notistack";
import { FormEventHandler } from "react";
import { UseFormReturn } from "react-hook-form";

export interface UseSaveStudioPriceParams {
	form: UseFormReturn<StudioPriceForm>;
}

export interface UseSaveStudioPrice {
	isSaving: boolean;
	isSuccess: boolean;
	handleStudioPriceSaveSubmit: FormEventHandler;
}

export default function useSaveStudioPrice(params: UseSaveStudioPriceParams): UseSaveStudioPrice {
	const { form } = params;

	const { handleSubmit } = form;

	const { mutateAsync: mutatePostPrice, isPending: isSaving, isSuccess: isSuccess } = useMutationPostPrice({});

	const handleSaveSuccess = () => {
		enqueueSnackbar({
			message: "포트폴리오를 저장했어요.",
			variant: "success",
		});
	};

	const handleStudioPriceSaveSubmit: FormEventHandler = handleSubmit((data) => {
		mutatePostPrice(data, {
			onSuccess: handleSaveSuccess,
			onError: handleCommonError,
		});
	});

	return {
		isSaving,
		isSuccess,
		handleStudioPriceSaveSubmit,
	};
}
