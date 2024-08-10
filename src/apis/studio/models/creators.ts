import { CreatorsKeywordType } from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/type";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export interface GetCreatorsRequest {
	categories?: string;
	creatorsKeywordType?: CreatorsKeywordType;
	keyword?: string;
	minPrice?: number;
	maxPrice?: number;
	pageNumber?: number;
	pageSize?: number;
}

export interface CreatorsResponse {
	id: number;
	name: string;
	description: string;
	instagramUsername: string;
	categories: InstatoonCategoryType[];
	pageNumber: number;
	pageSize: number;
}

export interface GetCreatorsResponse extends CreatorsResponse {
	content?: CreatorsResponse[];
}
