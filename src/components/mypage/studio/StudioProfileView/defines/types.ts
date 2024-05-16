import { InstagramMedia } from "@/apis/instagram";
import { PostProfileRequest } from "@/apis/studio";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export type Portfolio = {
	id: string;
	link: string;
};

export interface StudioProfileForm extends Pick<PostProfileRequest, "name" | "description"> {
	name: string;
	description: string;
	category: Record<InstatoonCategoryType, boolean>;
	portfolios: InstagramMedia[];
}
