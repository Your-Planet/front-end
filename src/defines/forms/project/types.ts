export type DemandType = "DEMANDED" | "NOT_DEMANDED";

// 프로젝트 의뢰
export interface ProjectRequestForm {
	additionalPanel: {
		count: number;
		isNegotiable: boolean;
	};
	additionalModification: {
		count: number;
	};
	originFile: {
		demandType: DemandType;
	};
	refinement: {
		demandType: DemandType;
	};
	postDurationExtension: {
		months: number;
	};
	postStartDates: string[];
	dueDate: string;
	brandName: string;
	campaignDescription: string;
	referenceUrls: string[];
	referenceFiles: File[];
	offerPrice: number;
	message: string;
}

// TODO 추가 예정
// 프로젝트 자세히 보기

// 프로젝트 협상(작가 -> 광고주)

// 프로젝트 협상 (광고주 -> 작가)
