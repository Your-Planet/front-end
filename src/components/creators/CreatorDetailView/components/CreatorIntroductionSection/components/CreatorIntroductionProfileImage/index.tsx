import ProfileImage from "@/components/common/profile-image/ProfileImage";
import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { Skeleton } from "@mui/material";

const IMAGE_SIZE = 144;

function CreatorIntroductionProfileImage() {
	const studio = useCreatorStudio();
	const isLoading = useLoadingCreatorStudio();

	if (isLoading) {
		return (
			<Skeleton
				variant="rounded"
				width={IMAGE_SIZE}
				height={IMAGE_SIZE}
				sx={{
					borderRadius: "8px",
				}}
			/>
		);
	}

	return <ProfileImage src={studio.profile.profileImageUrl} size={IMAGE_SIZE} />;
}

export default CreatorIntroductionProfileImage;
