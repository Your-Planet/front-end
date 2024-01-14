// index
export type GenreType = "ALL" | "DAILY" | "DATE" | "HEALING" | "HUMOR";
export type GenreInfo = "전체" | "일상" | "연애" | "힐링" | "유머";
export type SortOptionType = "POPULARITY" | "LATEST" | "ALPHABETICAL";
export type SortOptionInfo = "인기순" | "최신순" | "이름순";

// AuthorDetail
export type SelectedAuthorType = {
	authorName: string | null;
	profilePictureUrl: string | null;
	instagramId: string | null;
};
