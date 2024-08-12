import { CreatorsKeywordType } from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/type";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export interface Pageable {
	pageNumber?: number;
	pageSize?: number;
}

export interface GetCreatorsRequest {
	categories?: string;
	keywordType?: CreatorsKeywordType;
	keyword?: string;
	minPrice?: number;
	maxPrice?: number;
	pageable?: Pageable;
}

export interface CreatorsResponse {
	id: number;
	name: string;
	description: string;
	instagramUsername: string;
	categories: InstatoonCategoryType[];
	pageable: Pageable;
}

export interface GetCreatorsResponse extends CreatorsResponse {
	content?: CreatorsResponse[];
}
