import { InstagramMedia } from "@/apis/instagram";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export interface StudioProfile {
	name: string;
	description: string;
	categories: InstatoonCategoryType[];
	portfolios: InstagramMedia[];
	profileImageUrl: string;
}

export type GetProfileRequest = void;

export interface GetProfileResponse extends StudioProfile {}

export interface PostProfileRequest extends Omit<StudioProfile, "portfolios"> {
	portfolioIds: string[];
}

export type PostProfileResponse = void;
