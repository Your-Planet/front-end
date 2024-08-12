import { AccessTokenPayload } from "@/defines/jwt/types";
import { MemberType } from "@/defines/member/types";

export type GlobalIa = PageAttributes &
	LoginIa &
	LogoutIa &
	JoinIa &
	DeletionIa &
	CreatorsIa &
	ProjectIa &
	StudioIa &
	UserInfoIa &
	FindIa &
	ResetPwIa &
	TermsIa &
	PrivacyIa;

export type Ia<PageName extends string, SubIa extends PageAttributes = PageAttributes> = PageAttributes &
	Record<PageName, SubIa>;

type LoginIa = Ia<"login">;

type LogoutIa = Ia<"logout">;

type JoinIa = Ia<"join", JoinSubIa["creator"] & JoinSubIa["sponsor"] & JoinSubIa["complete"]>;

type DeletionIa = Ia<"deletion", DeletionSubIa["complete"]>;

type CreatorsIa = Ia<"creators", CreatorsSubIa["[id]"] & CreatorsSubIa["creator"] & CreatorsSubIa["guest"]>;

type ProjectIa = Ia<"project", ProjectSubIa["[id]"]>;

type StudioIa = Ia<"studio", StudioSubIa["profile"] & StudioSubIa["price"]>;

type UserInfoIa = Ia<"userinfo", UserInfoSubIa["verify"]>;

type FindIa = Ia<"find", FindSubIa["email"] & FindSubIa["pw"]>;

type ResetPwIa = Ia<"reset-pw">;

type TermsIa = Ia<"terms">;

type PrivacyIa = Ia<"privacy">;

type JoinSubIa = {
	creator: Ia<"creator", Ia<"verify" | "details">>;
	sponsor: Ia<"sponsor", Ia<"details">>;
	complete: Ia<"complete">;
};

type DeletionSubIa = {
	complete: Ia<"complete">;
};

type CreatorsSubIa = {
	["[id]"]: Ia<"[id]", Ia<"request", Ia<"step1" | "step2" | "confirm" | "complete">>>;
	creator: Ia<"creator">;
	guest: Ia<"guest">;
};

type ProjectSubIa = {
	["[id]"]: Ia<"[id]">;
};

type StudioSubIa = {
	profile: Ia<"profile">;
	price: Ia<"price">;
};

type UserInfoSubIa = {
	verify: Ia<"verify">;
};

type FindSubIa = {
	email: Ia<"email", Ia<"complete">>;
	pw: Ia<"pw", Ia<"complete">>;
};

export interface PageAttributes {
	// 브라우저 탭에 표시되는 제목
	title: string;
	// UI상에서 표시되는 라벨
	label: string;
	accessConfig?: PageAccessConfig;
}

export type PageAccessConfig = (PageAccessAllowedOnLogin | PageAccessDisallowedOnLogin) & {
	fallbackUrl?: PageAccessFallbackUrl;
};

type PageAccessAllowedOnLogin = {
	allowedOnLogin: true;
	disallowedOnLogin?: never;
} & (PageAccessAllowedMemberTypes | PageAccessDisallowedMemberTypes);

type PageAccessDisallowedOnLogin = {
	allowedOnLogin?: never;
	disallowedOnLogin: true;
	allowedMemberTypes?: never;
	disallowedMemberTypes?: never;
};

type PageAccessAllowedMemberTypes = {
	allowedMemberTypes?: readonly MemberType[];
	disallowedMemberTypes?: never;
};

type PageAccessDisallowedMemberTypes = {
	allowedMemberTypes?: never;
	disallowedMemberTypes?: readonly MemberType[];
};

type PageAccessFallbackUrl =
	| string
	| ((globalIa: GlobalIa, accessConfig: PageAccessConfig, jwtPayload: AccessTokenPayload | null) => string);
