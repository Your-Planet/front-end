// src/hooks/useCreatorsSearchParams.ts
import { GetCreatorsRequest } from "@/apis/studio";
import {
	CreatorsKeywordType,
	DEFAULT_CREATORS_KEYWORD_TYPE,
	SortByType,
} from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/type";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { useSearchParams } from "next/navigation";

export const useCreatorsSearchParams = () => {
	const searchParams = useSearchParams();

	const getMinValueFromURL = () => parseInt(searchParams.get("min") ?? "0", 10);

	const getMaxValueFromURL = () => parseInt(searchParams.get("max") ?? "0", 10);

	const getSelectedCategoriesFromURL = () => searchParams.get("categories") as InstatoonCategoryType;

	const getFilteredCategoriesFromURL = () =>
		(getSelectedCategoriesFromURL()
			?.split(",")
			.filter((category) => category) ?? []) as InstatoonCategoryType[];

	const getKeywordType = () =>
		(searchParams.get("keywordType") ?? DEFAULT_CREATORS_KEYWORD_TYPE) as CreatorsKeywordType;

	const getKeyword = () => searchParams.get("keyword") ?? "";

	const getPageNumberFromURL = () => parseInt(searchParams.get("pageNumber") ?? "0", 10);

	const getPageSizeFromURL = () => parseInt(searchParams.get("pageSize") ?? "0", 10);

	const getSortByFromURL = () => (searchParams.get("sortBy") ?? "popularity") as SortByType;

	const getCreatorsParamsFromURL = (): GetCreatorsRequest => {
		const categories = getSelectedCategoriesFromURL();
		const keywordType = getKeywordType();
		const keyword = getKeyword();
		const minPrice = getMinValueFromURL();
		const maxPrice = getMaxValueFromURL();
		const pageNumber = getPageNumberFromURL();
		const pageSize = getPageSizeFromURL();
		const pageable = {
			...(pageNumber && { pageNumber }),
			...(pageSize && { pageSize }),
		};

		return {
			...(categories && { categories }),
			...(keywordType && { keywordType }),
			...(keyword && { keyword }),
			...(minPrice && { minPrice }),
			...(maxPrice && { maxPrice }),
			pageable,
		};
	};

	return {
		getMinValueFromURL,
		getMaxValueFromURL,
		getSelectedCategoriesFromURL,
		getFilteredCategoriesFromURL,
		getKeywordType,
		getKeyword,
		getPageNumberFromURL,
		getPageSizeFromURL,
		getSortByFromURL,
		getCreatorsParamsFromURL,
	};
};
