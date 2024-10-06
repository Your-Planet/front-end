import { ServiceOptionTypeByWorkingDays, StudioPrice, StudioPriceOption, StudioProfile } from "@/apis/studio";

export interface CreatorStudioRequest {
	id: number;
}

export interface CreatorStudioResponse {
	profile: StudioProfile;
	price: PricelessStudioPrice;
}

type PricelessStudioPrice = Omit<StudioPrice, "option"> & {
	option: PricelessStudioPriceOption;
};

type PricelessStudioPriceOption = Record<
	ServiceOptionTypeByWorkingDays["withWorkingDays"],
	Omit<StudioPriceOption[ServiceOptionTypeByWorkingDays["withWorkingDays"]], "price">
> &
	Record<
		ServiceOptionTypeByWorkingDays["withoutWorkingDays"],
		Omit<StudioPriceOption[ServiceOptionTypeByWorkingDays["withoutWorkingDays"]], "price">
	>;
