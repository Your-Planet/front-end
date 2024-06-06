import { AUTHOR_CARD_WIDTH } from "@/components/common/AuthorCard";
import InstagramMediaCard from "@/components/common/InstagramMediaCard";
import { StudioProfileForm } from "@/components/mypage/studio/StudioProfileView/defines/types";
import { styled } from "@mui/material";
import { useFormContext } from "react-hook-form";

const StyledUl = styled("ul")`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

function StudioProfilePortfolioPreview() {
	const { watch } = useFormContext<StudioProfileForm>();

	const { portfolios } = watch();

	return (
		<StyledUl>
			{portfolios.map(
				(portfolio) =>
					portfolio.id && (
						<li key={portfolio.id}>
							<InstagramMediaCard width={AUTHOR_CARD_WIDTH} instagramMedia={portfolio} />
						</li>
					),
			)}
		</StyledUl>
	);
}

export default StudioProfilePortfolioPreview;
