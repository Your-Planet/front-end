import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import useMutationPostPriceTemp from "@/hooks/queries/studio/useMutationPostPriceTemp";
import { handleCommonError } from "@/utils/error";
import { enqueueSnackbar } from "notistack";
import { FormEventHandler } from "react";
import { UseFormReturn } from "react-hook-form";

export interface UseSaveStudioPriceTempParams {
	form: UseFormReturn<StudioPriceForm>;
}

export interface UseSaveStudioPriceTemp {
	isTempSaving: boolean;
	handleStudioPriceTempSave: FormEventHandler;
}

export default function useSaveStudioPriceTemp(params: UseSaveStudioPriceTempParams): UseSaveStudioPriceTemp {
	const { form } = params;

	const { getValues } = form;

	const { mutateAsync: mutatePostPriceTemp, isPending: isTempSaving } = useMutationPostPriceTemp({});

	const handleStudioPriceTempSuccess = () => {
		enqueueSnackbar({
			message: "포트폴리오를 임시 저장했어요.",
			variant: "success",
		});
	};

	const handleStudioPriceTempSave: FormEventHandler = async () => {
		try {
			const data = {
				service: getValues("service"),
				option: getValues("option"),
			};

			await mutatePostPriceTemp(data);

			handleStudioPriceTempSuccess();
		} catch (e) {
			handleCommonError(e);
		}
	};

	return {
		isTempSaving,
		handleStudioPriceTempSave,
	};
}
