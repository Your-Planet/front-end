import { useAuthorStudio } from "@/components/search/SearchDetailView/providers/AuthorStudioProvider";
import { Typography } from "@mui/material";

function AuthorIntroductionName() {
	const studio = useAuthorStudio();

	// TODO @김현규 스켈레톤 UI
	if (!studio) {
		return <>로딩중</>;
	}

	return <Typography variant={"h3"}>{studio.profile.name}</Typography>;
}

export default AuthorIntroductionName;
