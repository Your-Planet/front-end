import { InstagramPost } from "@/apis/instagram";
import { PostProfileRequest } from "@/apis/studio";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export type Portfolio = Pick<InstagramPost, "id" | "permalink">;

export interface StudioProfileForm extends Pick<PostProfileRequest, "name" | "description"> {
	name: string;
	description: string;
	category: Record<InstatoonCategoryType, boolean>;
	portfolios: Portfolio[];
}
