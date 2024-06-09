"use client";

import Header from "@/components/search/components/SearchAuthorView/components/Header";
import SearchAuthorFilter from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter";
import SortSection from "@/components/search/components/SearchAuthorView/components/SortSection";
import { Box } from "@mui/material";

type Props = {};

function SearchAuthorView({}: Props) {
	return (
		<Box display="flex" gap="3rem" flexDirection="column">
			<Header />
			<Box display="flex" gap="1rem" flexDirection="column">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<SearchAuthorFilter />
					<SortSection />
				</Box>
				{/* TODO: @나은찬 필터 결과 표시 */}
				<Box>필터 결과</Box>
			</Box>
		</Box>
	);
}

export default SearchAuthorView;