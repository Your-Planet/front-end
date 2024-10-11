import CategoryChip from "@/components/common/CategoryChip";
import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { Skeleton, styled } from "@mui/material";

const StyledCategoryList = styled("ul")`
	display: flex;
	gap: 4px;
	margin-top: 12px;
`;

function CreatorIntroductionCategories() {
	const studio = useCreatorStudio();
	const isLoading = useLoadingCreatorStudio();

	return (
		<StyledCategoryList>
			{isLoading
				? Array.from({ length: 3 }).map((_, i) => (
						<li key={i}>
							<Skeleton variant="rounded" width={40} height={16} />
						</li>
					))
				: studio.profile.categories.map((categoryType) => (
						<li key={categoryType}>
							<CategoryChip categoryType={categoryType} />
						</li>
					))}
		</StyledCategoryList>
	);
}

export default CreatorIntroductionCategories;
