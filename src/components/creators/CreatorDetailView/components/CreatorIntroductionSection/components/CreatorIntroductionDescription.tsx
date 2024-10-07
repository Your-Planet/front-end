import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { Box } from "@mui/material";

function CreatorIntroductionDescription() {
	const studio = useCreatorStudio();
	const isLoading = useLoadingCreatorStudio();

	// TODO @김현규 스켈레톤 UI
	if (isLoading) {
		return <>로딩중</>;
	}

	return (
		<Box
			sx={{
				width: "100%",
				marginTop: "24px",
				lineHeight: "20px",
			}}
		>
			{studio.profile.description}
		</Box>
	);
}

export default CreatorIntroductionDescription;
