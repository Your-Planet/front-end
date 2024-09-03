import { ReactHookFormProps } from "@/components/common/ReactHookForm/defines/types";
import { Dayjs } from "dayjs";

export type DemandType = "DEMANDED" | "NOT_DEMANDED";

export interface ProjectFormFieldCommonProps
	extends Pick<ReactHookFormProps<ProjectCommonForm>, "formName" | "required"> {
	helperText?: string;
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
	dueDate: string;
	brandName: string;
	campaignDescription: string;
	referenceUrls: string[];
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
