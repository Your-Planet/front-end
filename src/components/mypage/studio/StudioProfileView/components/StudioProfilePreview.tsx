import { AuthorDetailResponse } from "@/apis/member";
import { StudioProfile } from "@/apis/studio";
import { AuthorCard } from "@/components/common/AuthorCard";
import { HEADER_HEIGHT } from "@/components/common/layout/Header/defines/constants";
import { STUDIO_PROFILE_FORM_LENGTH } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import useLoadStudioProfile from "@/components/mypage/studio/StudioProfileView/hooks/useLoadStudioProfile";
import { categoryToCategories } from "@/components/mypage/studio/StudioProfileView/utils";
import {
	STUDIO_FORM_WIDTH,
	STUDIO_PROFILE_GAP,
	STUDIO_PROFILE_PREVIEW_WIDTH,
	STUDIO_VIEW_PADDING,
} from "@/components/mypage/studio/defines/constants";
import useQueryGetDetail from "@/hooks/queries/member/useQueryGetDetail";
import { Box } from "@mui/material";
import { useFormContext } from "react-hook-form";

const BUTTON_TOOLTIP_MESSAGE = "미리보기에서는 지원하지 않는 기능입니다.";

function StudioProfilePreview() {
	const { watch } = useFormContext<StudioProfileForm>();

	const { name, description, category, portfolios } = watch();

	const { data: { data } = {} } = useQueryGetDetail({
		req: undefined,
		queryOption: {
			refetchOnWindowFocus: false,
		},
	});

	const memberInfo = data as AuthorDetailResponse;

	const profile: StudioProfile = {
		name: name.substring(0, STUDIO_PROFILE_FORM_LENGTH.name.max),
		description: description.substring(0, STUDIO_PROFILE_FORM_LENGTH.description.max),
		categories: categoryToCategories(category).slice(0, STUDIO_PROFILE_FORM_LENGTH.category.max),
		portfolios,
	};

	const { isLoading } = useLoadStudioProfile();

	if (isLoading) {
		return null;
	}

	return (
		<Box
			sx={{
				[`@media (max-width: ${STUDIO_FORM_WIDTH + STUDIO_PROFILE_PREVIEW_WIDTH + STUDIO_PROFILE_GAP}px)`]: {
					display: "none",
				},
				position: "sticky",
				height: "fit-content",
				top: `${HEADER_HEIGHT + STUDIO_VIEW_PADDING.vertical}px`,
			}}
		>
			<AuthorCard
				profile={profile}
				instagramUserName={memberInfo?.instagramUsername || ""}
				buttonEvent={{
					project: {
						tooltip: BUTTON_TOOLTIP_MESSAGE,
					},
					detail: {
						tooltip: BUTTON_TOOLTIP_MESSAGE,
					},
				}}
			/>
		</Box>
	);
}

export default StudioProfilePreview;
