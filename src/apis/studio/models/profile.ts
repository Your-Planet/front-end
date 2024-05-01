import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

interface StudioProfile {
	categories: InstatoonCategoryType[];
}

export interface PostProfileRequest extends StudioProfile {}

export type PostProfileResponse = void;
