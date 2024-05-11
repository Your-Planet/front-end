import { PostDurationMonthType, ProvisionType } from "@/components/mypage/studio/StudioPriceView/defines/types";

interface StudioPrice {
	service: {
		price: number;
		workingDays: number;
		defaultCuts: number;
		modificationCount: number;
		postDurationMonthType: PostDurationMonthType;
	};
	option: {
		refinement: {
			provisionType: ProvisionType;
			price: number;
		};
		additionalPanel: {
			provisionType: ProvisionType;
			price: number;
			workingDays: number;
		};
		additionalModification: {
			provisionType: ProvisionType;
			price: number;
			workingDays: number;
		};
		postDurationExtension: {
			provisionType: ProvisionType;
			price: number;
		};
	};
}

export interface PostPriceTempRequest extends StudioPrice {}

export interface PostPriceRequest extends StudioPrice {}

export type PostPriceTempResponse = void;

export type PostPriceResponse = void;
