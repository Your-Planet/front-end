import { MemberType } from "@/defines/member/types";

export type PageAccessConfig =
	| {
			allowedMemberTypes?: readonly MemberType[];
			disallowedMemberTypes?: never;
	  }
	| {
			disallowedMemberTypes?: readonly MemberType[];
			allowedMemberTypes?: never;
	  };

export interface Page {
	title: string;
	label: string;
	accessConfig?: PageAccessConfig;
}

export type Ia<PageName extends string, SubIa extends Page = Page> = Page & Record<PageName, SubIa>;

export type GlobalIa = Page &
	LoginIa &
	JoinIa &
	DeletionIa &
	SearchIa &
	QuotationIa &
	MyPageIa &
	FindIa &
	ResetPwIa &
	TermsIa &
	PrivacyIa;

type LoginIa = Ia<"login">;

type JoinIa = Ia<"join", JoinSubIa["author"] & JoinSubIa["sponsor"]>;

type DeletionIa = Ia<"deletion", DeletionSubIa["complete"]>;

type SearchIa = Ia<"search">;

type QuotationIa = Ia<"quotation">;

type MyPageIa = Ia<"myPage", MyPageSubIa["portfolio"] & MyPageSubIa["quotation-history"]>;

type FindIa = Ia<"find", FindSubIa["email"] & FindSubIa["pw"]>;

type ResetPwIa = Ia<"reset-pw">;

type TermsIa = Ia<"terms">;

type PrivacyIa = Ia<"privacy">;

type JoinSubIa = {
	author: Ia<"author", Ia<"verify" | "details" | "complete">>;
	sponsor: Ia<"sponsor", Ia<"details" | "complete">>;
};

type DeletionSubIa = {
	complete: Ia<"complete">;
};

type MyPageSubIa = {
	portfolio: Ia<"portfolio", Ia<"update">>;
	["quotation-history"]: Ia<"quotation-history", Ia<"[id]">>;
};

type FindSubIa = {
	email: Ia<"email", Ia<"complete">>;
	pw: Ia<"pw", Ia<"complete">>;
};
