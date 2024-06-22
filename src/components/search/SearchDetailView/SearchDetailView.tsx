"use client";

import AuthorIntroductionSection from "@/components/search/SearchDetailView/components/AuthorIntroductionSection";
import AuthorStudioProvider from "@/components/search/SearchDetailView/providers/AuthorStudioProvider";

export interface SearchDetailViewProps {}

function SearchDetailView(props: SearchDetailViewProps) {
	const {} = props;

	return (
		<AuthorStudioProvider>
			<AuthorIntroductionSection />
		</AuthorStudioProvider>
	);
}

export default SearchDetailView;
