import { StudioPriceForm } from "@/components/studio/StudioPriceView/defines/types";
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
	handleStudioPriceSaveSubmit: FormEventHandler;
}

export default function useSaveStudioPrice(params: UseSaveStudioPriceParams): UseSaveStudioPrice {
	const { form } = params;

	const { handleSubmit } = form;

	const { mutateAsync: mutatePostPrice, isPending: isSaving } = useMutationPostPrice({});

	const handleSaveSuccess = () => {
		enqueueSnackbar({
			message: "포트폴리오를 저장했어요.",
			variant: "success",
		});
	};

	const handleStudioPriceSaveSubmit: FormEventHandler = handleSubmit(async (data) => {
		try {
			await mutatePostPrice(data);
			handleSaveSuccess();
		} catch (e) {
			handleCommonError(e);
		}
	});

	return {
		isSaving,
		handleStudioPriceSaveSubmit,
	};
}
