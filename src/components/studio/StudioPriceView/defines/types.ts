import { PostDurationMonthType, ProvisionType, StudioPrice } from "@/apis/studio";
import { LengthLimit } from "@/defines/forms/types";

export type ServiceForm = {
	price: number; // 가격
	workingDays: number; // 작업 기간
	defaultCuts: number; // 기본 컷 수
	modificationCount: number; // 기본 수정 횟수
	postDurationMonthType: PostDurationMonthType; // 기본 업로드 기간
};

export type OptionForm = {
	// 2차 가공
	refinement: {
		provisionType: ProvisionType; // 기본 제공, 추가 제공, 미제공
		price: number;
	};
	// 컷 수 추가
	additionalPanel: {
		provisionType: ProvisionType;
		price: number;
		workingDays: number;
	};
	// 수정 횟수 추가
	additionalModification: {
		provisionType: ProvisionType;
		price: number;
		workingDays: number;
	};
	// 업로드 기간 연장
	postDurationExtension: {
		provisionType: ProvisionType;
		price: number;
	};
	// 원본 파일 제공
	originFile: {
		provisionType: ProvisionType;
		price: number;
	};
};

export type StudioPriceForm = StudioPrice;

export type ServiceLimits<ServiceForm> = Omit<
	{
		[K in keyof ServiceForm]: LengthLimit;
	},
	"postDurationMonthType"
>;
