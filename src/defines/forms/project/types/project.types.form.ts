import { DemandType } from "@/defines/forms/project/types";
import { ProjectReferenceUrl } from "@/defines/forms/project/types/project.types.referenceUrls";
import { Dayjs } from "dayjs";

export interface ProjectCommonForm {
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
	postStartDate: Dayjs | null;
	postStartDates: { date: string }[];
	dueDate: Dayjs | null;
	brandName: string;
	campaignDescription: string;
	referenceUrls: ProjectReferenceUrl[];
	referenceFiles: File[];
	offerPrice: number;
	message: string;
}

// 프로젝트 의뢰
export type ProjectRequestForm = Pick<
	ProjectCommonForm,
	| "additionalPanel"
	| "additionalModification"
	| "originFile"
	| "refinement"
	| "postDurationExtension"
	| "postStartDate"
	| "postStartDates"
	| "dueDate"
	| "brandName"
	| "campaignDescription"
	| "referenceUrls"
	| "referenceFiles"
	| "offerPrice"
	| "message"
>;

// TODO 추가 예정
// 프로젝트 자세히 보기

// 프로젝트 협상(작가 -> 광고주)

// 프로젝트 협상 (광고주 -> 작가)
