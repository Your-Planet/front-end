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

export interface PostProfileRequest {
	profileImage: File | null;
	studioRegisterForm: Omit<StudioProfile, "portfolios" | "profileImageUrl"> & {
		portfolioIds: string[];
	};
}

export type PostProfileResponse = void;
