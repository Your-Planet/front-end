import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { Skeleton, Typography } from "@mui/material";

function CreatorIntroductionName() {
	const studio = useCreatorStudio();
	const isLoading = useLoadingCreatorStudio();

	if (isLoading) {
		return <Skeleton variant="text" width={200} height={48} />;
	}

	return <Typography variant={"h3"}>{studio.profile.name}</Typography>;
}

export default CreatorIntroductionName;
