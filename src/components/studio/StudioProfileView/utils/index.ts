import { DEFAULT_CATEGORY } from "@/components/studio/StudioProfileView/defines/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export const categoryToCategories = (category: Record<InstatoonCategoryType, boolean>): InstatoonCategoryType[] => {
	return Object.entries(category)
		.filter(([_, checked]) => checked)
		.map(([categoryType]) => categoryType as InstatoonCategoryType);
};

export const categoriesToCategory = (categories: InstatoonCategoryType[]): Record<InstatoonCategoryType, boolean> => {
	return categories.reduce((acc, category) => {
		acc[category] = true;
		return acc;
	}, DEFAULT_CATEGORY);
};
