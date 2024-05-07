import { LengthLimit } from "@/defines/forms/types";

export type PostDurationMonth = "A_MONTH" | "TWO_MONTH" | "THREE_MONTH" | "SIX_MONTH" | "OVER_A_YEAR";

export type ServiceForm = {
	price: number; // 가격
	workingDays: number; // 작업 기간
	defaultCuts: number; // 기본 컷 수
	modificationCount: number; // 기본 수정 횟수
	postDurationMonth: PostDurationMonth; // 기본 업로드 기간
};

export type Provision = "NONE" | "DEFAULT" | "ADDITIONAL";

export type OptionForm = {
	// 2차 가공
	refinement: {
		provision: Provision; // 기본 제공, 추가 제공, 미제공
		price: number;
	};
	// 컷 수 추가
	additionalPanel: {
		provision: Provision;
		price: number;
		workingDays: number;
	};
	// 수정 횟수 추가
	additionalModification: {
		provision: Provision;
		price: number;
		workingDays: number;
	};
	// 업로드 기간 연장
	postDurationExtension: {
		provision: Provision;
		price: number;
	};
};

export type StudioPriceForm = {
	service: ServiceForm;
	option: OptionForm;
};

export type ServiceLimits<ServiceForm> = Omit<
	{
		[K in keyof ServiceForm]: LengthLimit;
	},
	"postDurationMonth"
>;
