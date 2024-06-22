import { useAuthorIntroductionStudio } from "@/components/search/SearchDetailView/providers/AuthorIntroductionStudioProvider";
import { Box } from "@mui/material";

function AuthorIntroductionDescription() {
	const studio = useAuthorIntroductionStudio();

	// TODO @김현규 스켈레톤 UI
	if (!studio) {
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

export default AuthorIntroductionDescription;
