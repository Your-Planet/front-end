import { PostProfileRequest } from "@/apis/studio";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

// TODO @김현규 인스타그램 게시글 타입 Pick 하는 것으로 변경
export type Portfolio = {
	id: number;
	permalink: string;
};

export interface StudioProfileForm extends Pick<PostProfileRequest, "name" | "description"> {
	name: string;
	description: string;
	category: Record<InstatoonCategoryType, boolean>;
	portfolios: Portfolio[];
}
