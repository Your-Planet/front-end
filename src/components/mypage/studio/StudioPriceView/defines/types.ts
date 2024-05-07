import { LengthLimit } from "@/defines/forms/types";

export type PostDurationMonthType = "A_MONTH" | "TWO_MONTH" | "THREE_MONTH" | "SIX_MONTH" | "OVER_A_YEAR";

export type ServiceForm = {
	price: number;
	workingDays: number;
	defaultCuts: number;
	modificationCount: number;
	postDurationType: PostDurationMonthType;
};

export type StudioPriceForm = {
	service: ServiceForm;
};

export type ServiceLimits<ServiceForm> = Omit<
	{
		[K in keyof ServiceForm]: LengthLimit;
	},
	"postDurationType"
>;
