import { HEADER_HEIGHT } from "@/components/common/layout/Header/defines/constants";
import StudioProfileCardPreview from "@/components/studio/StudioProfileView/components/StudioProfilePreview/components/card/StudioProfileCardPreview";
import StudioProfilePortfolioPreview from "@/components/studio/StudioProfileView/components/StudioProfilePreview/components/portfolio/StudioProfilePortfolioPreview";
import {
	STUDIO_FORM_WIDTH,
	STUDIO_PROFILE_GAP,
	STUDIO_PROFILE_PREVIEW_WIDTH,
	STUDIO_VIEW_PADDING,
} from "@/components/studio/defines/constants";
import { Box } from "@mui/material";

function StudioProfilePreview() {
	return (
		<Box
			sx={{
				[`@media (max-width: ${STUDIO_FORM_WIDTH + STUDIO_PROFILE_PREVIEW_WIDTH + STUDIO_PROFILE_GAP}px)`]: {
					display: "none",
				},
				position: "sticky",
				height: "fit-content",
				top: `${HEADER_HEIGHT + STUDIO_VIEW_PADDING.vertical}px`,
				display: "flex",
				flexDirection: "column",
				gap: "32px",
			}}
		>
			<StudioProfileCardPreview />
			<StudioProfilePortfolioPreview />
		</Box>
	);
}

export default StudioProfilePreview;
