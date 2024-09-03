import { ProjectCommonForm } from "@/defines/forms/project/types";

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
