import { deepFreeze } from "@/utils/object";

type PostDurationMonthType = "A_MONTH" | "TWO_MONTH" | "THREE_MONTH" | "SIX_MONTH" | "OVER_A_YEAR";

export const labelByPostDurationMonthType: Record<PostDurationMonthType, string> = deepFreeze({
	A_MONTH: "1개월",
	TWO_MONTH: "2개월",
	THREE_MONTH: "3개월",
	SIX_MONTH: "6개월",
	OVER_A_YEAR: "12개월 이상",
});

type ServiceForm = {
	price: number;
	workingDays: number;
	defaultCuts: number;
	modificationCount: number;
	postDurationType: PostDurationMonthType;
};

export type StudioPriceForm = {
	service: ServiceForm;
};
