import {
	SearchByType,
	SortByType,
} from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/type";

export const CATEGORY_SELECT_BOX_WIDTH = 120;
export const BUDGET_SELECT_BOX_WIDTH = 100;
export const SEARCH_BY_BOX_WIDTH = 150;
export const SORT_BY_BOX_WIDTH = 140;

export const SEARCH_BY_LABEL: Record<SearchByType, string> = {
	name: "인스타툰 이름",
	instagramId: "인스타그램 계정",
	introduction: "인스타툰 소개",
};

export const SORT_BY_LABEL: Record<SortByType, string> = {
	popularity: "인기순",
	association: "연관도순",
	fastest: "작업 빠른 순",
};
