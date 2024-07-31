export interface StudioPrice {
	service: DefaultService;
	option: Record<ServiceOptionTypeByWorkingDays["withWorkingDays"], ProvidingServiceWithWorkingDays> &
		Record<ServiceOptionTypeByWorkingDays["withoutWorkingDays"], ProvidingServiceWithWorkingDays>;
}

export interface PostPriceTempRequest extends StudioPrice {}

export interface PostPriceRequest extends StudioPrice {}

export type GetPriceTempRequest = void;

export type GetPriceTempResponse = StudioPrice;

export type GetPriceRequest = void;

export type GetPriceResponse = StudioPrice;

export type PostPriceTempResponse = void;

export type PostPriceResponse = void;

export type PostDurationMonthType = "ONE_MONTH" | "TWO_MONTH" | "THREE_MONTH" | "SIX_MONTH" | "MORE_THAN_ONE_YEAR";

export type ProvisionType = "UNPROVIDED" | "DEFAULT" | "PROVIDED";

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

export type ServiceOptionType =
	| ServiceOptionTypeByWorkingDays["withWorkingDays"]
	| ServiceOptionTypeByWorkingDays["withoutWorkingDays"];
