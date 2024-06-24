import { PostDurationMonthType, ProvisionType } from "@/apis/studio";
import { ServiceForm, ServiceLimits, StudioPriceForm } from "@/components/mypage/studio/StudioPriceView/defines/types";
import { LABEL_BY_POST_DURATION_MONTH_TYPE, LABEL_BY_PROVISION_TYPE } from "@/defines/price/constants";

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
