import { useCreatorStudio } from "@/components/creators/CreatorDetailView/providers/CreatorStudioProvider";
import { Typography } from "@mui/material";

function CreatorIntroductionName() {
	const studio = useCreatorStudio();

	// TODO @김현규 스켈레톤 UI
	if (!studio) {
		return <>로딩중</>;
	}

	return <Typography variant={"h3"}>{studio.profile.name}</Typography>;
}

export default CreatorIntroductionName;
