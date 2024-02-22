import { ErrorViewProps, PageErrorCode } from "@/components/error/defines/types";
import { HttpStatusCode } from "axios";

export const ERROR_VIEW_PROPS_BY_ERROR_CODE: Record<PageErrorCode, ErrorViewProps> = {
	[HttpStatusCode.Forbidden]: {
		errorCode: HttpStatusCode.Forbidden,
		title: "접근이 거부되었습니다",
		description: "요청하신 페이지에 대한 접근이 거부되었어요.\n입력하신 주소를 한번 더 확인해 주세요.",
	},
	[HttpStatusCode.NotFound]: {
		errorCode: HttpStatusCode.NotFound,
		title: "페이지를 찾을 수 없습니다",
		description:
			"요청하신 페이지의 주소가 존재하지 않거나 삭제 혹은 변경되었어요.\n입력하신 주소를 한번 더 확인해 주세요.",
	},
	[HttpStatusCode.InternalServerError]: {
		errorCode: HttpStatusCode.InternalServerError,
		title: "페이지가 작동하지 않습니다",
		description: "문제를 해결하기 위해 열심히 노력하고 있어요.\n잠시 후 다시 시도해 주세요.",
	},
};
