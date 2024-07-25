import InstagramMediaCard from "@/components/common/InstagramMediaCard";
import { StudioProfileForm } from "@/components/studio/StudioProfileView/defines/types";
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
			{portfolios
				.filter(({ id, permalink }) => id && permalink)
				.map((portfolio) => (
					<li key={portfolio.id}>
						<InstagramMediaCard width={CREATOR_CARD_WIDTH} instagramMedia={portfolio} />
					</li>
				))}
		</StyledUl>
	);
}

export default StudioProfilePortfolioPreview;
