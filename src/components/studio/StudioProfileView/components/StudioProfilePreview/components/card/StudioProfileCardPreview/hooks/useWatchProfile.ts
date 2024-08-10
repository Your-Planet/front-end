import { StudioProfile } from "@/apis/studio";
import { STUDIO_PROFILE_FORM_LENGTH } from "@/components/studio/StudioProfileView/defines/constants";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
import {
	categoryToCategories,
	getIsProfileImageTypeFile,
	getIsProfileImageTypeString,
} from "@/components/studio/StudioProfileView/utils";

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

	const [profileImageURL, setProfileImageURL] = useState(getIsProfileImageTypeString(profileImage) ? profileImage : "");

	useEffect(() => {
		(async () => {
			if (getIsProfileImageTypeFile(profileImage)) {
				setProfileImageURL(await convertFileToDataURL(profileImage));
			}
		})();
	}, [profileImage]);

	const profile: Omit<StudioProfile, "portfolios"> = {
		name: name.substring(0, STUDIO_PROFILE_FORM_LENGTH.name.max),
		description: description.substring(0, STUDIO_PROFILE_FORM_LENGTH.description.max),
		categories: categoryToCategories(category).slice(0, STUDIO_PROFILE_FORM_LENGTH.category.max),
		profileImageUrl: getIsProfileImageTypeString(profileImage)
			? profileImage
			: getIsProfileImageTypeFile(profileImage)
				? profileImageURL
				: "",
	};

	return profile;
}
