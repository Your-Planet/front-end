import { STUDIO_PRICE_FORM_LIMITS } from "@/components/mypage/studio/StudioPriceView/defines/constants";
import { getMaxRule, getMinRule } from "@/utils/react-hook-form/rule";

export const getPriceMinRule = () => {
	return {
		...getMinRule(
			STUDIO_PRICE_FORM_LIMITS.service.price.min,
			`최소 ${STUDIO_PRICE_FORM_LIMITS.service.price.min}원 이상 입력해 주세요.`,
		),
	};
};

export const getPriceMaxRule = () => {
	return {
		...getMaxRule(
			STUDIO_PRICE_FORM_LIMITS.service.price.max,
			`최대 ${STUDIO_PRICE_FORM_LIMITS.service.price.max}원까지 입력 가능합니다.`,
		),
	};
};

export const getWorkingDaysMinRule = () => {
	return {
		...getMinRule(
			STUDIO_PRICE_FORM_LIMITS.service.workingDays.min,
			`최소 ${STUDIO_PRICE_FORM_LIMITS.service.workingDays.min}일 이상 입력해 주세요.`,
		),
	};
};

export const getWorkingDaysMaxRule = () => {
	return {
		...getMaxRule(
			STUDIO_PRICE_FORM_LIMITS.service.workingDays.max,
			`최대 ${STUDIO_PRICE_FORM_LIMITS.service.workingDays.max}일까지 입력 가능합니다.`,
		),
	};
};

export const getDefaultCutsMinRule = () => {
	return {
		...getMinRule(
			STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.min,
			`최소 ${STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.min}장 이상 입력해 주세요.`,
		),
	};
};

export const getDefaultCutsMaxRule = () => {
	return {
		...getMaxRule(
			STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.max,
			`최대 ${STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.max}장까지 입력 가능합니다.`,
		),
	};
};

export const getModificationCountMinRule = () => {
	return {
		...getMinRule(
			STUDIO_PRICE_FORM_LIMITS.service.modificationCount.min,
			`최소 ${STUDIO_PRICE_FORM_LIMITS.service.modificationCount.min}회 이상 입력해 주세요.`,
		),
	};
};

export const getModificationCountMaxRule = () => {
	return {
		...getMaxRule(
			STUDIO_PRICE_FORM_LIMITS.service.modificationCount.max,
			`최대 ${STUDIO_PRICE_FORM_LIMITS.service.modificationCount.max}회까지 입력 가능합니다.`,
		),
	};
};
