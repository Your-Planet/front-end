"use client";

import StudioProfileFormView from "@/components/studio/StudioProfileView/components/StudioProfileFormView";
import { StudioProfilePreview } from "@/components/studio/StudioProfileView/components/StudioProfilePreview";
import StudioProfileFormProvider from "@/components/studio/StudioProfileView/provider/StudioProfileFormProvider";
import { STUDIO_PROFILE_GAP, STUDIO_VIEW_PADDING } from "@/components/studio/defines/constants";
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
