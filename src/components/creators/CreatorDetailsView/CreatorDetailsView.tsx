"use client";

import CreatorIntroductionSection from "@/components/creators/CreatorDetailsView/components/CreatorIntroductionSection";
import CreatorPortfoliosSection from "@/components/creators/CreatorDetailsView/components/CreatorPortfoliosSection";
import CreatorServiceOptionSection from "@/components/creators/CreatorDetailsView/components/CreatorServiceOptionSection";
import CreatorStudioProvider from "@/components/creators/CreatorDetailsView/providers/CreatorStudioProvider";
import { Box } from "@mui/material";

export interface CreatorDetailsViewProps {}

function CreatorDetailsView(props: CreatorDetailsViewProps) {
	const {} = props;

	return (
		<CreatorStudioProvider>
			<Box
				sx={{
					display: "flex",
					gap: "64px",
					padding: "44px 20px",
				}}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: "64px",
						width: "fit-content",
					}}
				>
					<CreatorIntroductionSection />
					<CreatorServiceOptionSection />
				</Box>

				<CreatorPortfoliosSection />
			</Box>
		</CreatorStudioProvider>
	);
}

export default CreatorDetailsView;
