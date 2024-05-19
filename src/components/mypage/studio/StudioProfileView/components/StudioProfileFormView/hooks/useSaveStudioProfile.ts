import { InstagramMedia } from "@/apis/instagram";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { categoryToCategories } from "@/components/mypage/studio/StudioProfileView/utils";
import { IA } from "@/defines/ia/constants";
import useMutationPostProfile from "@/hooks/queries/studio/useMutationPostProfile";
import { handleCommonError } from "@/utils/error";
import { getIaPath } from "@/utils/ia";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { FormEventHandler } from "react";
import { useFormContext } from "react-hook-form";

export interface UseSaveStudioProfile {
	isSaving: boolean;
	handleStudioProfileFormSubmit: FormEventHandler;
}

export default function useSaveStudioProfile(): UseSaveStudioProfile {
	const { handleSubmit } = useFormContext<StudioProfileForm>();

	const { mutateAsync: mutatePostProfile, isPending: isSaving } = useMutationPostProfile({});

	const router = useRouter();

	const handleSaveSuccess = () => {
		enqueueSnackbar({
			message: "프로필 설정을 저장했어요.",
			variant: "success",
		});

		router.push(getIaPath(IA.mypage.studio.price));
	};

	const handleStudioProfileFormSubmit: FormEventHandler = handleSubmit(async (data) => {
		const portfoliosToPortfolioIds = (portfolios: InstagramMedia[]) => {
			return portfolios.map(({ id }) => id);
		};

		try {
			const { category, portfolios, ...restData } = data;

			await mutatePostProfile({
				...restData,
				categories: categoryToCategories(category),
				portfolioIds: portfoliosToPortfolioIds(portfolios),
			});

			handleSaveSuccess();
		} catch (e) {
			handleCommonError(e);
		}
	});

	return {
		isSaving,
		handleStudioProfileFormSubmit,
	};
}
