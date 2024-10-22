"use client";

import CreatorIntroductionSection from "@/components/creators/CreatorDetailView/components/CreatorIntroductionSection";
import CreatorPortfoliosSection from "@/components/creators/CreatorDetailView/components/CreatorPortfoliosSection";
import CreatorServiceOptionSection from "@/components/creators/CreatorDetailView/components/CreatorServiceOptionSection";
import { Box } from "@mui/material";

function CreatorDetailView() {
	return (
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
	);
}

export default CreatorDetailView;
