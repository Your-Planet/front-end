import { DemandType, ProjectCommonForm } from "@/defines/forms/project/types";
import { deepFreeze } from "@/utils/object";

export const PROJECT_FORM_LENGTH = {
	postStartDates: {
		min: 1,
		max: 5,
	},
	brandName: {
		min: 1,
		max: 30,
	},
	campaignDescription: {
		min: 1,
		max: 500,
	},
	referenceUrls: {
		min: 0,
		max: 5,
	},
	referenceFiles: {
		min: 0,
		max: 10,
	},
	message: {
		min: 0,
		max: 1000,
	},
} satisfies Partial<Record<keyof ProjectCommonForm, { min: number; max: number }>>;

export const PROJECT_FORM_SIZE = {
	referenceFiles: {
		min: 0,
		max: 20, // MB
	},
};

export const PROJECT_FORM_WIDTH = 520;

export const LABEL_BY_DEMAND_TYPE: Record<DemandType, string> = deepFreeze({
	NOT_DEMANDED: "미요청",
	DEMANDED: "요청",
});

export const DEMAND_RADIOS: { value: DemandType; label: string }[] = Object.keys(LABEL_BY_DEMAND_TYPE).map((key) => ({
	value: key as DemandType,
	label: LABEL_BY_DEMAND_TYPE[key as DemandType],
}));
