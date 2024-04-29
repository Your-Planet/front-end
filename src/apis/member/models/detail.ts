import { AuthorJoinRequest, SponsorJoinRequest } from "@/apis/member/models/join";

export type MemberDetailRequest = void;

export type AuthorDetailResponse = Omit<AuthorJoinRequest, "password">;

export type SponsorDetailResponse = Omit<SponsorJoinRequest, "password">;

export type MemberDetailResponse = AuthorDetailResponse | SponsorDetailResponse;
