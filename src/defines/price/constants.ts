import { PostDurationMonthType, ProvisionType, ServiceOptionType } from "@/apis/studio";
import { deepFreeze } from "@/utils/object";

export const LABEL_BY_POST_DURATION_MONTH_TYPE: Record<PostDurationMonthType, string> = deepFreeze({
	ONE_MONTH: "1개월",
	TWO_MONTH: "2개월",
	THREE_MONTH: "3개월",
	SIX_MONTH: "6개월",
	MORE_THAN_ONE_YEAR: "12개월 이상",
});

export const LABEL_BY_PROVISION_TYPE: Record<ProvisionType, string> = deepFreeze({
	UNPROVIDED: "미제공",
	DEFAULT: "기본 제공",
	PROVIDED: "추가 제공",
});

export const LABEL_BY_SERVICE_OPTION_TYPE: Record<ServiceOptionType, string> = deepFreeze({
	refinement: "2차 가공",
	additionalPanel: "컷 수 추가",
	additionalModification: "수정 횟수 추가",
	postDurationExtension: "업로드 기간 연장",
	originFile: "원본 파일 제공",
});
