"use client";

import StudioProfileFormView from "@/components/mypage/studio/StudioProfileView/components/StudioProfileFormView";
import { StudioProfilePreview } from "@/components/mypage/studio/StudioProfileView/components/StudioProfilePreview";
import StudioProfileFormProvider from "@/components/mypage/studio/StudioProfileView/provider/StudioProfileFormProvider";
import { STUDIO_PROFILE_GAP, STUDIO_VIEW_PADDING } from "@/components/mypage/studio/defines/constants";
import MemberDetailProvider from "@/providers/MemberDetailProvider";
import { Box } from "@mui/material";

function StudioProfileView() {
	return (
		<Box
			sx={{
				padding: `${STUDIO_VIEW_PADDING.vertical}px ${STUDIO_VIEW_PADDING.horizontal}px`,
				display: "flex",
				gap: `${STUDIO_PROFILE_GAP}px`,
			}}
		>
			<MemberDetailProvider>
				<StudioProfileFormProvider>
					<StudioProfileFormView />
					<StudioProfilePreview />
				</StudioProfileFormProvider>
			</MemberDetailProvider>
		</Box>
	);
}

export default StudioProfileView;
