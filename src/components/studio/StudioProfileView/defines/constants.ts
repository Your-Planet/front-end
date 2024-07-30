import { InstagramMedia } from "@/apis/instagram";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
import { LengthLimit } from "@/defines/forms/types";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { DefaultValues } from "react-hook-form/dist/types/form";

export const DEFAULT_CATEGORY: Record<InstatoonCategoryType, boolean> = {
	DAILY_LIFE: false,
	EXERCISE: false,
	FASHION: false,
	PARENTING: false,
	BEAUTY: false,
	ECONOMY: false,
	SELF_IMPROVEMENT: false,
	EMPATHY: false,
	INVESTMENT: false,
	HUMOR: false,
	TRAVEL: false,
	TIPS: false,
	ROMANCE: false,
	MARRIAGE: false,
	HEALING: false,
};

export const DEFAULT_PORTFOLIO: DefaultValues<InstagramMedia> = {
	id: "",
	permalink: "",
};

export const STUDIO_PROFILE_FORM_LENGTH: Record<
	keyof Pick<StudioProfileForm, "name" | "description" | "category" | "portfolios">,
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
		min: 3,
		max: 5,
	},
	portfolios: {
		min: 1,
		max: 10,
	},
};
