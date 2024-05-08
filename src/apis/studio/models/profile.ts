import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

interface StudioProfile {
	name: string;
	description: string;
	categories: InstatoonCategoryType[];
	portfolioIds: string[];
}

export interface PostProfileRequest extends StudioProfile {}

export type PostProfileResponse = void;
