import { PostDurationMonthType, ProvisionType } from "@/components/mypage/studio/StudioPriceView/defines/types";

export interface PostPriceTempRequest extends StudioPrice {}

export interface PostPriceRequest extends StudioPrice {}

export type GetPriceTempRequest = void;

export type GetPriceTempResponse = StudioPrice;

export type GetPriceRequest = void;

export type GetPriceResponse = StudioPrice;

export type PostPriceTempResponse = void;

export type PostPriceResponse = void;

export interface ProvidingService {
	provisionType: ProvisionType;
	price: number;
}

export interface ProvidingServiceWithWorkingDays extends ProvidingService {
	workingDays: number;
}

export interface DefaultService extends Omit<ProvidingServiceWithWorkingDays, "provisionType"> {
	defaultCuts: number;
	modificationCount: number;
	postDurationMonthType: PostDurationMonthType;
}

export type ServiceOptionTypeByWorkingDays = {
	withWorkingDays: "additionalPanel" | "additionalModification";
	withoutWorkingDays: "refinement" | "postDurationExtension" | "originFile";
};

interface StudioPrice {
	service: DefaultService;
	option: Record<ServiceOptionTypeByWorkingDays["withWorkingDays"], ProvidingServiceWithWorkingDays> &
		Record<ServiceOptionTypeByWorkingDays["withoutWorkingDays"], ProvidingServiceWithWorkingDays>;
}
