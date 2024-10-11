import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { Box, Skeleton } from "@mui/material";

function CreatorIntroductionDescription() {
	const studio = useCreatorStudio();
	const isLoading = useLoadingCreatorStudio();

	return (
		<Box
			sx={{
				width: "100%",
				marginTop: "24px",
				lineHeight: "20px",
			}}
		>
			{isLoading
				? Array.from({ length: 3 })
						.map((_, i) => <Skeleton key={i} variant="text" width="100%" height={24} />)
						.concat(<Skeleton variant="text" width="60%" height={24} />)
				: studio.profile.description}
		</Box>
	);
}

export default CreatorIntroductionDescription;
