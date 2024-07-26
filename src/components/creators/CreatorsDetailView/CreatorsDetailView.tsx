"use client";

import CreatorIntroductionSection from "@/components/creators/CreatorsDetailView/components/CreatorIntroductionSection";
import CreatorPortfoliosSection from "@/components/creators/CreatorsDetailView/components/CreatorPortfoliosSection";
import CreatorServiceOptionSection from "@/components/creators/CreatorsDetailView/components/CreatorServiceOptionSection";
import CreatorStudioProvider from "@/components/creators/CreatorsDetailView/providers/CreatorStudioProvider";
import { Box } from "@mui/material";

export interface CreatorsDetailViewProps {}

function CreatorsDetailView(props: CreatorsDetailViewProps) {
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

export default CreatorsDetailView;
