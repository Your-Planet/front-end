import { PortfolioLink, StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { LengthLimit } from "@/defines/forms/types";

export const DEFAULT_PORTFOLIO_LINK: PortfolioLink = {
	content: "",
};

export const STUDIO_PROFILE_FORM_LENGTH: Record<
	keyof Pick<StudioProfileForm, "name" | "description" | "category">,
	LengthLimit
> = {
	name: {
		min: 1,
		max: 20,
	},
	description: {
		min: 10,
		max: 200,
	},
	category: {
		min: 1,
		max: 5,
	},
};
