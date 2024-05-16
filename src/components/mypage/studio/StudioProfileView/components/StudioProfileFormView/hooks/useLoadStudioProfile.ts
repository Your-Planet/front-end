import { DEFAULT_CATEGORY } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import useQueryGetProfile from "@/hooks/queries/studio/useQueryGetProfile";
import { useEffect } from "react";
import { UseFormReturn } from "react-hook-form";

export interface UseLoadStudioProfileParams {
	form: UseFormReturn<StudioProfileForm>;
}

export default function useLoadStudioProfile(params: UseLoadStudioProfileParams) {
	const { form } = params;

	const { reset } = form;

	const { data: { data: profile } = {}, isLoading } = useQueryGetProfile({
		req: undefined,
		queryOption: {
			retry: false,
		},
	});

	useEffect(() => {
		if (!profile) return;

		const categoriesToCategory = (categories: InstatoonCategoryType[]): Record<InstatoonCategoryType, boolean> => {
			return categories.reduce((acc, category) => {
				acc[category] = true;
				return acc;
			}, DEFAULT_CATEGORY);
		};

		const { categories, ...rest } = profile;

		reset({
			...rest,
			category: categoriesToCategory(categories),
		});
	}, [profile]);

	return {
		isLoading,
	};
}