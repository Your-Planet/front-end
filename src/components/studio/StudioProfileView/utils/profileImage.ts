import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";

type ProfileImage = StudioProfileForm["profileImage"];

const getProfileImageTypeChecker =
	(profileImage: ProfileImage) =>
	<T extends "object" | "string">(typeName: T) =>
		typeof profileImage === typeName;

export const getIsProfileImageTypeString = (profileImage: ProfileImage): profileImage is string =>
	getProfileImageTypeChecker(profileImage)("string");

export const getIsProfileImageTypeFile = (profileImage: ProfileImage): profileImage is File => {
	if (!profileImage) return false;
	return getProfileImageTypeChecker(profileImage)("object");
};
