import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { Dayjs } from "dayjs";

export type DemandType = "DEMANDED" | "NOT_DEMANDED";

export interface ProjectFormFieldCommonProps
	extends Pick<ReactHookFormProps<ProjectCommonForm>, "formName" | "required"> {
	helperText?: string;
	readOnly?: boolean;
}

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
	referenceUrls: string[];
	referenceFiles: File[];
	offerPrice: number;
	message: string;
	sponsorName: string;
	finalPanel: number;
}

// 프로젝트 의뢰 및 요약
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
	| "sponsorName"
	| "finalPanel"
>;

// TODO 추가 예정
// 프로젝트 자세히 보기

// 프로젝트 협상(작가 -> 광고주)

// 프로젝트 협상 (광고주 -> 작가)
