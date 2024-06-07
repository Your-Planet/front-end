import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { SelectChangeEvent } from "@mui/material";

export type SearchAuthorFilterProps = {
	selectedCategories: InstatoonCategoryType[];
	splitCategoriesFromSearchParams: (searchParams: string) => void;
	onChangeCategories: (event: SelectChangeEvent<InstatoonCategoryType[]>) => void;
	onClickSearchButton: () => void;
	onClickResetButton: () => void;
};
