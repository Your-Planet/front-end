import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import useQueryGetPrice from "@/hooks/queries/studio/useQueryGetPrice";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

export interface UseLoadStudioPriceParams {
	form: UseFormReturn<StudioPriceForm>;
}

export interface UseLoadStudioPrice {
	isPrice: boolean;
	isLoading: boolean;
}

export default function useLoadStudioPrice(params: UseLoadStudioPriceParams): UseLoadStudioPrice {
	const { form } = params;

	const { reset } = form;

	const { data: { data: priceData } = {}, isLoading } = useQueryGetPrice({
		req: undefined,
	});

	useEffect(() => {
		reset(priceData);
	}, [priceData]);

	return {
		isPrice: Boolean(priceData),
		isLoading,
	};
}
