import { ColorType, NegotiationProgressType, ProjectStatusType } from "@/defines/forms/project/types";
import { deepFreeze } from "@/utils/object";

export const NEGOTIATION_PROGRESS_TYPE: Record<NegotiationProgressType, string> = deepFreeze({
	IN_REVIEW: "검토 중",
	IN_NEGOTIATION: "협상 중",
	IN_PROGRESS: "진행 중",
	COMPLETE: "완료",
});

export const LABEL_BY_PROJECT_STATUS: Record<ProjectStatusType, string> = deepFreeze({
	NEED_REPLY: "회신 팔요",
	IN_PROGRESS: "진행 중",
	SENT: "발송 완료",
	DELAYED: "발송 지연",
	REQUEST_MODIFICATION: "수정 요청",
});

export const COLOR_BY_PROJECT_STATUS: Record<ProjectStatusType, ColorType> = deepFreeze({
	NEED_REPLY: "error",
	IN_PROGRESS: "default",
	SENT: "primary",
	DELAYED: "warning",
	REQUEST_MODIFICATION: "success",
});
