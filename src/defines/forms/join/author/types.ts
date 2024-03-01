import { AuthorJoinRequest } from "@/apis/member";
import { JoinCommonMemberForm } from "@/defines/forms/join/common/types";

export interface JoinAuthorForm extends Omit<AuthorJoinRequest, "genderType" | "birthDate">, JoinCommonMemberForm {}
