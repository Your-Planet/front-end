import { KeywordType } from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/type";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export interface CreatorsRequest {
	categories?: string;
	keywordType?: KeywordType;
	keyword?: string;
	minPrice?: number;
	maxPrice?: number;
}

export interface CreatorsResponse {
	id: number;
	name: string;
	description: string;
	instagramUsername: string;
	categories: InstatoonCategoryType[];
}

export interface GetCreatorsRequest extends CreatorsRequest {}

export interface GetCreatorsResponse extends CreatorsResponse {
	content?: CreatorsResponse[];
}
