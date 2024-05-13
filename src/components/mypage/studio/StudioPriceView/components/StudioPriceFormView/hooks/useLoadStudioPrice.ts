import { StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import useQueryGetPrice from "@/hooks/queries/studio/useQueryGetPrice";
import useQueryGetPriceTemp from "@/hooks/queries/studio/useQueryGetPriceTemp";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

export interface UseLoadStudioPriceParams {
	form: UseFormReturn<StudioPriceForm>;
}

export interface UseLoadStudioPrice {
	isPrice: boolean;
}

export default function useLoadStudioPrice(params: UseLoadStudioPriceParams): UseLoadStudioPrice {
	const { form } = params;

	const { reset } = form;

	const { data: { data: priceTemp } = {} } = useQueryGetPriceTemp({
		req: undefined,
	});

	const { data: { data: price } = {} } = useQueryGetPrice({
		req: undefined,
	});

	useEffect(() => {
		const priceData = priceTemp ?? price;

		if (!priceData) {
			return;
		}

		reset(priceData);
	}, [priceTemp, price]);

	return {
		isPrice: Boolean(price),
	};
}
