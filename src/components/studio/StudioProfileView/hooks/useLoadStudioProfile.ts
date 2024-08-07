import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
import { categoriesToCategory } from "@/components/studio/StudioProfileView/utils";
import useQueryGetProfile from "@/hooks/queries/studio/useQueryGetProfile";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export default function useLoadStudioProfile() {
	const { reset } = useFormContext<StudioProfileForm>();

	const { data: { data: profile } = {}, isLoading } = useQueryGetProfile({
		req: undefined,
		queryOption: {
			retry: false,
		},
	});

	useEffect(() => {
		if (!profile) return;

		const { categories, profileImageUrl, ...rest } = profile;

		reset({
			...rest,
			category: categoriesToCategory(categories),
			profileImage: profileImageUrl,
		});
	}, [profile]);

	return {
		isLoading,
	};
}
