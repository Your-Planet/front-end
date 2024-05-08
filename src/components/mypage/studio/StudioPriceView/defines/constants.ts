import {
	PostDurationMonthType,
	ProvisionType,
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

export const LABEL_BY_PROVISION_TYPE: Record<ProvisionType, string> = deepFreeze({
	NONE: "미제공",
	DEFAULT: "기본 제공",
	ADDITIONAL: "추가 제공",
});

export const POST_DURATION_MONTH_ITEMS: { value: PostDurationMonthType; label: string }[] = Object.keys(
	LABEL_BY_POST_DURATION_MONTH_TYPE,
).map((key) => ({
	value: key as PostDurationMonthType,
	label: LABEL_BY_POST_DURATION_MONTH_TYPE[key as PostDurationMonthType],
}));

export const PROVISION_RADIOS: { value: ProvisionType; label: string }[] = Object.keys(LABEL_BY_PROVISION_TYPE).map(
	(key) => ({
		value: key as ProvisionType,
		label: LABEL_BY_PROVISION_TYPE[key as ProvisionType],
	}),
);

export const STUDIO_PRICE_FORM_LIMITS: Record<keyof Pick<StudioPriceForm, "service">, ServiceLimits<ServiceForm>> = {
	service: {
		price: { min: 1000, max: 9999990 },
		workingDays: { min: 1, max: 30 },
		defaultCuts: { min: 1, max: 10 },
		modificationCount: { min: 1, max: 30 },
	},
};
