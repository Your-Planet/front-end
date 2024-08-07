import { CreatorDetailResponse } from "@/apis/member";
import CreatorCard from "@/components/common/CreatorCard";
import useRenderProfileImage from "@/components/studio/StudioProfileView/components/StudioProfilePreview/components/card/StudioProfileCardPreview/hooks/useRenderProfileImage";
import useWatchProfile from "@/components/studio/StudioProfileView/components/StudioProfilePreview/components/card/StudioProfileCardPreview/hooks/useWatchProfile";
import useLoadStudioProfile from "@/components/studio/StudioProfileView/hooks/useLoadStudioProfile";
import { useMemberDetailContext } from "@/providers/MemberDetailProvider";

const BUTTON_TOOLTIP_MESSAGE = "미리보기에서는 지원하지 않는 기능입니다.";

function StudioProfileCardPreview() {
	const profile = useWatchProfile();

	const renderProfileImage = useRenderProfileImage();

	const { isLoading: isLoadingProfile } = useLoadStudioProfile();

	const { data: { data } = {}, isLoading: isLoadingDetail } = useMemberDetailContext();

	const memberInfo = data as CreatorDetailResponse;

	return (
		<CreatorCard
			profile={profile}
			instagramUsername={memberInfo?.instagramUsername || ""}
			renderProfileImage={renderProfileImage}
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
