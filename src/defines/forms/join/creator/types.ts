import { CreatorJoinRequest } from "@/apis/member";
import { JoinCommonMemberForm } from "@/defines/forms/join/common/types";

export interface JoinCreatorForm extends Omit<CreatorJoinRequest, "genderType" | "birthDate">, JoinCommonMemberForm {}
