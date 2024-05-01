import { STUDIO_PRICE_FORM_LIMITS } from "@/components/mypage/studio/StudioPriceView/defines/constants";

export const getPriceMinRule = () => {
	return {
		min: {
			value: STUDIO_PRICE_FORM_LIMITS.service.price.min,
			message: `${STUDIO_PRICE_FORM_LIMITS.service.price.min}원 이상 입력해주세요.`,
		},
	};
};

export const getPriceMaxRule = () => {
	return {
		max: {
			value: STUDIO_PRICE_FORM_LIMITS.service.price.max,
			message: `최대 ${STUDIO_PRICE_FORM_LIMITS.service.price.max}원까지 입력 가능합니다.`,
		},
	};
};

export const getWorkingDaysMinRule = () => {
	return {
		min: {
			value: STUDIO_PRICE_FORM_LIMITS.service.workingDays.min,
			message: `최대 ${STUDIO_PRICE_FORM_LIMITS.service.workingDays.min}일까지 입력 가능합니다.`,
		},
	};
};

export const getWorkingDaysMaxRule = () => {
	return {
		max: {
			value: STUDIO_PRICE_FORM_LIMITS.service.workingDays.max,
			message: `최대 ${STUDIO_PRICE_FORM_LIMITS.service.workingDays.max}일까지 입력 가능합니다.`,
		},
	};
};

export const getDefaultCutsMinRule = () => {
	return {
		min: {
			value: STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.min,
			message: `최대 ${STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.min}일까지 입력 가능합니다.`,
		},
	};
};

export const getDefaultCutsMaxRule = () => {
	return {
		max: {
			value: STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.max,
			message: `최대 ${STUDIO_PRICE_FORM_LIMITS.service.defaultCuts.max}일까지 입력 가능합니다.`,
		},
	};
};

export const getModificationCountMinRule = () => {
	return {
		min: {
			value: STUDIO_PRICE_FORM_LIMITS.service.modificationCount.min,
			message: `최대 ${STUDIO_PRICE_FORM_LIMITS.service.modificationCount.min}일까지 입력 가능합니다.`,
		},
	};
};

export const getModificationCountMaxRule = () => {
	return {
		max: {
			value: STUDIO_PRICE_FORM_LIMITS.service.modificationCount.max,
			message: `최대 ${STUDIO_PRICE_FORM_LIMITS.service.modificationCount.max}일까지 입력 가능합니다.`,
		},
	};
};
