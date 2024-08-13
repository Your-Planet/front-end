import { InstagramMedia } from "@/apis/instagram";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
import { categoryToCategories, getIsProfileImageTypeString } from "@/components/studio/StudioProfileView/utils";
import { IA } from "@/defines/ia/constants";
import useMutationPostProfile from "@/hooks/queries/studio/useMutationPostProfile";
import { handleCommonError } from "@/utils/error";
import { getIaPath } from "@/utils/ia";
import { enqueueClosableSnackbar } from "@/utils/snackbar";
import { useRouter } from "next/navigation";
import { enqueueSnackbar } from "notistack";
import { FormEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import { FieldErrors } from "react-hook-form/dist/types/errors";

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

		router.push(getIaPath(IA.studio.price));
	};

	const handleFormValid = async (data: StudioProfileForm) => {
		const portfoliosToPortfolioIds = (portfolios: InstagramMedia[]) => {
			return portfolios.map(({ id }) => id);
		};

		try {
			const { category, portfolios, profileImage, ...restData } = data;

			await mutatePostProfile({
				studioRegisterForm: {
					...restData,
					categories: categoryToCategories(category),
					portfolioIds: portfoliosToPortfolioIds(portfolios),
				},
				profileImage: getIsProfileImageTypeString(profileImage) ? null : profileImage,
			});

			handleSaveSuccess();
		} catch (e) {
			handleCommonError(e);
		}
	};

	const handleFormInvalid = async (errors: FieldErrors<StudioProfileForm>) => {
		if (errors.profileImage) {
			enqueueClosableSnackbar({
				message: errors.profileImage.message,
				variant: "error",
				autoHideDuration: null,
			});
		}
	};

	const handleStudioProfileFormSubmit: FormEventHandler = handleSubmit(handleFormValid, handleFormInvalid);

	return {
		isSaving,
		handleStudioProfileFormSubmit,
	};
}
