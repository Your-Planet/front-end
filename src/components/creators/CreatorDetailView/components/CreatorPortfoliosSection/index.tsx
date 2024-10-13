import InstagramMediaCard from "@/components/common/InstagramMediaCard";
import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { Skeleton, styled } from "@mui/material";

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
	const isLoading = useLoadingCreatorStudio();

	return (
		<StyledSection>
			<StyledUl>
				{isLoading
					? Array.from({ length: 3 }).map((_, i) => (
							<li key={i}>
								<Skeleton width="100%" variant="rounded" height={100} />
							</li>
						))
					: studio.profile.portfolios.map((portfolio) => (
							<li key={portfolio.id}>
								<InstagramMediaCard width="100%" instagramMedia={portfolio} />
							</li>
						))}
			</StyledUl>
		</StyledSection>
	);
}

export default CreatorPortfoliosSection;
