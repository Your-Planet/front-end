import { StudioProfile } from "@/apis/studio";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export type Portfolio = {
	id: string;
	link: string;
};

export interface StudioProfileForm extends Pick<StudioProfile, "name" | "description" | "portfolios"> {
	category: Record<InstatoonCategoryType, boolean>;
	profileImage: File | string | null;
}
