import { NegotiationProgressType } from "@/defines/forms/project/types";
import { deepFreeze } from "@/utils/object";

export const LABEL_BY_NEGOTIATION_PROGRESS: Record<NegotiationProgressType, string> = deepFreeze({
	IN_REVIEW: "검토 중",
	IN_NEGOTIATION: "협상 중",
	IN_PROGRESS: "진행 중",
	COMPLETE: "완료",
});
