import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { Typography } from "@mui/material";

function CreatorIntroductionName() {
	const studio = useCreatorStudio();
	const isLoading = useLoadingCreatorStudio();

	// TODO @김현규 스켈레톤 UI
	if (isLoading) {
		return <>로딩중</>;
	}

	return <Typography variant={"h3"}>{studio.profile.name}</Typography>;
}

export default CreatorIntroductionName;
