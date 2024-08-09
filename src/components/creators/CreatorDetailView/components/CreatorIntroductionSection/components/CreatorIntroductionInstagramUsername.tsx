import { useCreatorStudio } from "@/components/creators/CreatorDetailView/providers/CreatorStudioProvider";
import { styled } from "@mui/material";
import { blue } from "@mui/material/colors";

const StyledLink = styled("a")`
	display: inline-flex;
	margin-top: 8px;
	color: ${blue[500]};
	cursor: pointer;

	&:hover {
		text-decoration: underline;
	}
`;

function CreatorIntroductionInstagramUsername() {
	const studio = useCreatorStudio();

	// TODO @김현규 스켈레톤 UI
	if (!studio) {
		return <>로딩중</>;
	}

	const { instagramUsername } = studio;

	const instagramUrl = `https://instagram.com/${instagramUsername}`;

	return (
		<StyledLink href={instagramUrl} target={"_blank"}>
			@{instagramUsername}
		</StyledLink>
	);
}

export default CreatorIntroductionInstagramUsername;
