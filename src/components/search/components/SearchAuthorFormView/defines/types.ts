import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export type BudgetType = {
	min: number;
	max: number;
};

export type FilterType = "INSTATOON_NAME" | "INSTAGRAM_ACCOUNT" | "INSTATTON_DESCRIPTION";

export type SearchAuthorForm = {
	category: Record<InstatoonCategoryType, boolean>;
	budget: BudgetType;
	filter: FilterType;
};
