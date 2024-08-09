import ProfileImageSelector from "@/components/common/profile-image/ProfileImageSelector";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
import { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";

export default function useRenderProfileImage() {
	const { setValue } = useFormContext<StudioProfileForm>();

	const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const image = e.target.files?.[0];
		if (!image) return;

		setValue("profileImage", image);
	};

	// eslint-disable-next-line react/display-name
	return (profileImageUrl: string) => <ProfileImageSelector src={profileImageUrl} onChange={handleChange} />;
}
