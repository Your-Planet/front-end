"use client";

import OptionFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceOption";
import ServiceFormView from "@/components/mypage/studio/StudioPriceView/components/StudioPriceFormView/components/PriceService";
import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import StudioFormView from "@/components/mypage/studio/components/StudioFormView";
import { COOKIE } from "@/defines/cookie/constants";
import useMutationPostPrice from "@/hooks/queries/studio/useMutationPostPrice";
import useMutationPostPriceTemp from "@/hooks/queries/studio/useMutationPostPriceTemp";
import useQueryGetPrice from "@/hooks/queries/studio/useQueryGetPrice";
import useQueryGetPriceTemp from "@/hooks/queries/studio/useQueryGetPriceTemp";
import { getCookie } from "@/utils/cookie";
import { handleCommonError } from "@/utils/error";
import { LoadingButton } from "@mui/lab";
import { enqueueSnackbar } from "notistack";
import { FormEventHandler, useEffect } from "react";
import { useForm } from "react-hook-form";

export interface StudioPriceFormViewProps {}

function StudioPriceFormView(props: StudioPriceFormViewProps) {
	const {} = props;
	const accessToken = getCookie(COOKIE.accessToken);

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

	const { handleSubmit, getValues, reset } = form;

	const { data: { data: priceTemp } = {} } = useQueryGetPriceTemp({
		req: accessToken,
	});

	const { data: { data: price } = {} } = useQueryGetPrice({
		req: accessToken,
	});

	useEffect(() => {
		const priceData = priceTemp ?? price;

		if (!priceData) {
			return;
		}

		reset(priceData);
	}, [priceTemp, price]);

	const { mutateAsync: mutatePostPriceTemp, isPending: isTempSaving } = useMutationPostPriceTemp({});
	const { mutate: mutatePostPrice, isPending: isSaving } = useMutationPostPrice({});

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
			onError: handleCommonError,
		});
	});

	return (
		<StudioFormView title={"가격 설정"} useFormReturn={form} onSubmit={handleFormSubmit}>
			<ServiceFormView />
			<OptionFormView />
			<LoadingButton variant="outlined" type="button" onClick={handleTempSave} loading={isTempSaving} hidden={!!price}>
				임시 저장
			</LoadingButton>
			<LoadingButton variant="contained" type="submit" loading={isSaving}>
				포트폴리오 저장
			</LoadingButton>
		</StudioFormView>
	);
}

export default StudioPriceFormView;
