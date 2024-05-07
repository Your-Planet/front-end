import { STUDIO_PRICE_FORM_LIMITS } from "@/components/mypage/studio/StudioPriceView/defines/constants";
import { getMaxRule, getMinRule } from "@/utils/react-hook-form/rule";

export const priceMinRule = getMinRule(
	STUDIO_PRICE_FORM_LIMITS.service.price.min,
	(min) => `최소 ${min}원 이상 입력해 주세요.`,
);

export const priceMaxRule = getMaxRule(
	STUDIO_PRICE_FORM_LIMITS.service.price.max,
	(max) => `최대 ${max}원까지 입력 가능합니다.`,
);

export const workingDaysMinRule = getMinRule(
	STUDIO_PRICE_FORM_LIMITS.service.workingDays.min,
	(min) => `최소 ${min}일 이상 입력해 주세요.`,
);

export const workingDaysMaxRule = getMaxRule(
	STUDIO_PRICE_FORM_LIMITS.service.workingDays.max,
	(max) => `최대 ${max}일까지 입력 가능합니다.`,
);

export const defaultCutsMinRule = getMinRule(
	STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.min,
	(min) => `최소 ${min}장 이상 입력해 주세요.`,
);

export const defaultCutsMaxRule = getMaxRule(
	STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.max,
	(max) => `최대 ${max}장까지 입력 가능합니다.`,
);

export const modificationCountMinRule = getMinRule(
	STUDIO_PRICE_FORM_LIMITS.service.modificationCount.min,
	(min) => `최소 ${min}회 이상 입력해 주세요.`,
);

export const modificationCountMaxRule = getMaxRule(
	STUDIO_PRICE_FORM_LIMITS.service.modificationCount.max,
	(max) => `최대 ${max}회까지 입력 가능합니다.`,
);
