"use client";

import AuthorIntroductionSection from "@/components/search/SearchDetailView/components/AuthorIntroductionSection";
import AuthorPortfoliosSection from "@/components/search/SearchDetailView/components/AuthorPortfoliosSection";
import AuthorServiceOptionSection from "@/components/search/SearchDetailView/components/AuthorServiceOptionSection";
import AuthorStudioProvider from "@/components/search/SearchDetailView/providers/AuthorStudioProvider";
import { Box } from "@mui/material";

export interface SearchDetailViewProps {}

function SearchDetailView(props: SearchDetailViewProps) {
	const {} = props;

	return (
		<AuthorStudioProvider>
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
					<AuthorIntroductionSection />
					<AuthorServiceOptionSection />
				</Box>

				<AuthorPortfoliosSection />
			</Box>
		</AuthorStudioProvider>
	);
}

export default SearchDetailView;
