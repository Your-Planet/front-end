import { GenreType } from "@/components/search/defines/types";

export interface PostMeForm {
	instagramId: string;
	authorIntroduction: string;
	instatoonGenre: Set<GenreType>;
	portfolioLinks: Array<string>;
}
