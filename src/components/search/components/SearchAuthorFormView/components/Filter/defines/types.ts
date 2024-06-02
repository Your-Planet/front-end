import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { SelectChangeEvent } from "@mui/material";

export type FilterType = {
	selectedCategories: InstatoonCategoryType[];
	splitCategoriesFromSearchParams: (searchParams: string) => void;
	onChangeCategories: (event: SelectChangeEvent<InstatoonCategoryType[]>) => void;
	onClickSearchButton: () => void;
	onClickResetButton: () => void;
};

export interface CategoryProps
	extends Pick<FilterType, "selectedCategories" | "splitCategoriesFromSearchParams" | "onChangeCategories"> {}
