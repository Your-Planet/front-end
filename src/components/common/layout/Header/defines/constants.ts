import { deepFreeze } from "../../../../../utils/object";
import { PageInfo, PageType } from "./types";

export const FONT_BOLD_WEIGHT = 550;
export const FONT_NORMAL_WEIGHT = 400;
export const MIN_WIDTH = "35px";
export const FONT_COLOR = "rgba(33, 33, 33, 0.5)";
export const FONT_SIZE = "14px";
export const HEADER_HEIGHT = 80;

export const SELECTED_PAGE_COLOR = "#212121";

export const LABEL_BY_PAGE: Record<PageType, PageInfo> = deepFreeze({
	HOME: "홈",
	SEARCH: "작가 찾기",
	POST_ME: "포트폴리오 등록",
	NULL: "NULL",
});
