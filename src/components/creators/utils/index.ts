import { GetCreatorsResponse } from "@/apis/studio";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export const sortByPopularity = (creators: GetCreatorsResponse[]) => {
	// TODO: @나은찬 인기순 정렬
	return creators.sort((a, b) => a.name.localeCompare(b.name));
};

export const sortByAssociation = (creators: GetCreatorsResponse[], selectedCategories: InstatoonCategoryType[]) => {
	return creators.sort((a, b) => {
		const aMatchingCount = a.categories.filter((category) => selectedCategories.includes(category)).length;
		const bMatchingCount = b.categories.filter((category) => selectedCategories.includes(category)).length;

		return bMatchingCount - aMatchingCount;
	});
};

export const sortByFastest = (creators: GetCreatorsResponse[]) => {
	// TODO: @나은찬 작업 빠른순 정렬
	return creators.sort((a, b) => b.name.localeCompare(a.name));
};
