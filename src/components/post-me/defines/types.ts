import { GenreType } from "@/components/search/defines/types";

export interface PostMeForm {
	instagramId: string;
	authorIntroduction: string;
	instatoonGenre: Array<GenreType>;
	portfolioLinks: Array<string>;
}
