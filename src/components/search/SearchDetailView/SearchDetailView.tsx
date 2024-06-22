"use client";

import AuthorIntroductionSection from "@/components/search/SearchDetailView/components/AuthorIntroductionSection";
import AuthorIntroductionStudioProvider from "@/components/search/SearchDetailView/providers/AuthorIntroductionStudioProvider";

export interface SearchDetailViewProps {}

function SearchDetailView(props: SearchDetailViewProps) {
	const {} = props;

	return (
		<AuthorIntroductionStudioProvider>
			<AuthorIntroductionSection />
		</AuthorIntroductionStudioProvider>
	);
}

export default SearchDetailView;
