import { StudioProfile } from "@/apis/studio";
import { STUDIO_PROFILE_FORM_LENGTH } from "@/components/mypage/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { categoryToCategories } from "@/components/mypage/studio/StudioProfileView/utils";
import useFileToDataURLConverter from "@/hooks/common/useFileToDataURLConverter";
import { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";

export default function useWatchProfile() {
	const [name, description, category, profileImage] = useWatch<
		StudioProfileForm,
		["name", "description", "category", "profileImage"]
	>({
		name: ["name", "description", "category", "profileImage"],
	});

	const convertFileToDataURL = useFileToDataURLConverter();

	const [profileImageURL, setProfileImageURL] = useState(typeof profileImage === "string" ? profileImage : "");

	useEffect(() => {
		(async () => {
			if (profileImage && typeof profileImage === "object") {
				setProfileImageURL(await convertFileToDataURL(profileImage));
			}
		})();
	}, [profileImage]);

	const profile: Omit<StudioProfile, "portfolios"> = {
		name: name.substring(0, STUDIO_PROFILE_FORM_LENGTH.name.max),
		description: description.substring(0, STUDIO_PROFILE_FORM_LENGTH.description.max),
		categories: categoryToCategories(category).slice(0, STUDIO_PROFILE_FORM_LENGTH.category.max),
		profileImageUrl: profileImage ? (typeof profileImage === "string" ? profileImage : profileImageURL) : "",
	};

	return profile;
}
