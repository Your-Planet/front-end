import {
	CreatorsKeywordType,
	SortByType,
} from "@/components/creators/CreatorsSearchView/components/CreatorsView/CreatorsFilter/defines/type";

export const CATEGORY_SELECT_BOX_WIDTH = 120;
export const BUDGET_SELECT_BOX_WIDTH = 100;
export const CREATORS_KEYWORD_TYPE_BOX_WIDTH = 150;
export const SORT_BY_BOX_WIDTH = 140;

export const CREATORS_KEYWORD_TYPE: Record<CreatorsKeywordType, string> = {
	toonName: "인스타툰 이름",
	instagramUsername: "인스타그램 계정",
	description: "인스타툰 소개",
};

export const SORT_BY_LABEL: Record<SortByType, string> = {
	popularity: "인기순",
	association: "연관도순",
	fastest: "작업 빠른 순",
};
