import { CreatorJoinRequest, SponsorJoinRequest } from "@/apis/auth/models/join";

export type MemberDetailRequest = void;

export type CreatorDetailResponse = Omit<CreatorJoinRequest, "password">;

export type SponsorDetailResponse = Omit<SponsorJoinRequest, "password">;

export type MemberDetailResponse = CreatorDetailResponse | SponsorDetailResponse;
