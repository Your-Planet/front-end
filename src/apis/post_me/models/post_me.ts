import { GenreType } from "@/components/search/defines/types";

export interface PostMeRequest {
	instagramId: string;
	authorIntroduction: string;
	instatoonGenre: Set<GenreType>;
	portfolioLinks: Array<string>;
}

export type PostMeResponse = string;
