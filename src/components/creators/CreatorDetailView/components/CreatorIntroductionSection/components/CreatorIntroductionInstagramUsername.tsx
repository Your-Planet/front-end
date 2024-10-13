import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { Skeleton, styled } from "@mui/material";
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
	const isLoading = useLoadingCreatorStudio();

	if (isLoading) {
		return <Skeleton variant="text" width={100} height={24} />;
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
