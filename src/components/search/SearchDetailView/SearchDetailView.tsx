"use client";

import CreatorIntroductionSection from "@/components/search/SearchDetailView/components/CreatorIntroductionSection";
import CreatorPortfoliosSection from "@/components/search/SearchDetailView/components/CreatorPortfoliosSection";
import CreatorServiceOptionSection from "@/components/search/SearchDetailView/components/CreatorServiceOptionSection";
import CreatorStudioProvider from "@/components/search/SearchDetailView/providers/CreatorStudioProvider";
import { Box } from "@mui/material";

export interface SearchDetailViewProps {}

function SearchDetailView(props: SearchDetailViewProps) {
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

export default SearchDetailView;
