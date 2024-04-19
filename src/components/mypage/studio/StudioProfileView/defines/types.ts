import { InstatoonCategoryType } from "@/defines/instatoon-category/types";

export type PortfolioLink = {
	content: string;
};

// TODO @김현규 API request 객체 생성 후 상속하는 형태로 변경
export interface StudioProfileForm {
	name: string;
	description: string;
	category: Record<InstatoonCategoryType, boolean>;
	portfolioLinks: PortfolioLink[];
}
