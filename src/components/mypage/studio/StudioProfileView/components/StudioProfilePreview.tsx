import { AuthorDetailResponse } from "@/apis/member";
import { StudioProfile } from "@/apis/studio";
import { AuthorCard } from "@/components/common/AuthorCard";
import { STUDIO_PROFILE_FORM_LENGTH } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { categoryToCategories } from "@/components/mypage/studio/StudioProfileView/utils";
import {
	STUDIO_FORM_WIDTH,
	STUDIO_PROFILE_GAP,
	STUDIO_PROFILE_PREVIEW_WIDTH,
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
		categories: categoryToCategories(category),
		portfolios,
	};

	return (
		<Box
			sx={{
				[`@media (max-width: ${STUDIO_FORM_WIDTH + STUDIO_PROFILE_PREVIEW_WIDTH + STUDIO_PROFILE_GAP}px)`]: {
					display: "none",
				},
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
