import {
	PostDurationMonthType,
	ServiceForm,
	ServiceLimits,
	StudioPriceForm,
} from "@/components/mypage/studio/StudioPriceView/defines/types";
import { deepFreeze } from "@/utils/object";

export const LABEL_BY_POST_DURATION_MONTH_TYPE: Record<PostDurationMonthType, string> = deepFreeze({
	A_MONTH: "1개월",
	TWO_MONTH: "2개월",
	THREE_MONTH: "3개월",
	SIX_MONTH: "6개월",
	OVER_A_YEAR: "12개월 이상",
});

export const PostDurationMonthItems: { value: PostDurationMonthType; label: string }[] = Object.keys(
	LABEL_BY_POST_DURATION_MONTH_TYPE,
).map((key) => ({
	value: key as PostDurationMonthType,
	label: LABEL_BY_POST_DURATION_MONTH_TYPE[key as PostDurationMonthType],
}));

export const STUDIO_PRICE_FORM_LIMITS: Record<keyof Pick<StudioPriceForm, "service">, ServiceLimits<ServiceForm>> = {
	service: {
		price: { min: 1000, max: 9999990 },
		workingDays: { min: 1, max: 30 },
		defaultCuts: { min: 1, max: 30 },
		modificationCount: { min: 1, max: 30 },
	},
};
