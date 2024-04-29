import { JoinResponse } from "@/apis/member";

export type MemberDetailRequest = void;

export type MemberDetailResponse<T extends JoinResponse> = T;
