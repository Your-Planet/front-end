import { AuthorDetailResponse } from "@/apis/member";
import { StudioProfile } from "@/apis/studio";
import AuthorCard from "@/components/common/AuthorCard";
import ProfileImageSelector from "@/components/common/profile-image/ProfileImageSelector";
import { STUDIO_PROFILE_FORM_LENGTH } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import useLoadStudioProfile from "@/components/mypage/studio/StudioProfileView/hooks/useLoadStudioProfile";
import { categoryToCategories } from "@/components/mypage/studio/StudioProfileView/utils";
import { useMemberDetailContext } from "@/providers/MemberDetailProvider";
import { useFormContext } from "react-hook-form";

const BUTTON_TOOLTIP_MESSAGE = "미리보기에서는 지원하지 않는 기능입니다.";

function StudioProfileCardPreview() {
	const { watch } = useFormContext<StudioProfileForm>();

	const { name, description, category } = watch();

	const profile: Omit<StudioProfile, "portfolios"> = {
		name: name.substring(0, STUDIO_PROFILE_FORM_LENGTH.name.max),
		description: description.substring(0, STUDIO_PROFILE_FORM_LENGTH.description.max),
		categories: categoryToCategories(category).slice(0, STUDIO_PROFILE_FORM_LENGTH.category.max),
		profileImageUrl: "",
	};

	const { isLoading: isLoadingProfile } = useLoadStudioProfile();

	const { data: { data } = {}, isLoading: isLoadingDetail } = useMemberDetailContext();

	const memberInfo = data as AuthorDetailResponse;

	return (
		<AuthorCard
			profile={profile}
			instagramUsername={memberInfo?.instagramUsername || ""}
			renderProfileImage={() => <ProfileImageSelector />}
			buttonEvent={{
				project: {
					tooltip: BUTTON_TOOLTIP_MESSAGE,
				},
				detail: {
					tooltip: BUTTON_TOOLTIP_MESSAGE,
				},
			}}
			isLoading={isLoadingProfile || isLoadingDetail}
		/>
	);
}

export default StudioProfileCardPreview;
