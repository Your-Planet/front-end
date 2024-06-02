"use client";

import Filter from "@/components/search/components/SearchAuthorFormView/components/Filter";
import Header from "@/components/search/components/SearchAuthorFormView/components/Header";
import SortSection from "@/components/search/components/SearchAuthorFormView/components/SortSection";
import useFilter from "@/components/search/hooks/useFilter";
import { Box } from "@mui/material";

type Props = {};

function SearchAuthorFormView({}: Props) {
	const {
		selectedCategories,
		splitCategoriesFromSearchParams,
		handleChangeCategories,
		handleClickSearchButton,
		handleClickResetButton,
	} = useFilter();

	return (
		<Box display="flex" gap="3rem" flexDirection="column">
			<Header />
			<Box display="flex" gap="1rem" flexDirection="column">
				<Box display="flex" justifyContent="space-between" alignItems="center">
					<Filter
						selectedCategories={selectedCategories}
						onChangeCategories={handleChangeCategories}
						onClickSearchButton={handleClickSearchButton}
						onClickResetButton={handleClickResetButton}
						splitCategoriesFromSearchParams={splitCategoriesFromSearchParams}
					/>
					<SortSection />
				</Box>
				{/* TODO: @나은찬 필터 결과 표시 */}
				<Box>필터 결과</Box>
			</Box>
		</Box>
	);
}

export default SearchAuthorFormView;
