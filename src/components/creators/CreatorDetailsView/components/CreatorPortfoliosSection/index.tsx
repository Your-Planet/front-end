import InstagramMediaCard from "@/components/common/InstagramMediaCard";
import { useCreatorStudio } from "@/components/creators/CreatorDetailsView/providers/CreatorStudioProvider";
import { styled } from "@mui/material";

const StyledSection = styled("section")`
	width: 680px;
`;

const StyledUl = styled("ul")`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

function CreatorPortfoliosSection() {
	const studio = useCreatorStudio();

	// TODO @김현규 스켈레톤 UI
	if (!studio) {
		return <>로딩중</>;
	}

	return (
		<StyledSection>
			<StyledUl>
				{studio.profile.portfolios.map((portfolio) => (
					<li key={portfolio.id}>
						<InstagramMediaCard width={"100%"} instagramMedia={portfolio} />
					</li>
				))}
			</StyledUl>
		</StyledSection>
	);
}

export default CreatorPortfoliosSection;
