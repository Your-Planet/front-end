import CategoryChip from "@/components/common/CategoryChip";
import useCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useCreatorStudio";
import useLoadingCreatorStudio from "@/components/creators/CreatorDetailView/hooks/useLoadingCreatorStudio";
import { styled } from "@mui/material";

const StyledCategoryList = styled("ul")`
	display: flex;
	gap: 4px;
	margin-top: 12px;
`;

function CreatorIntroductionCategories() {
	const studio = useCreatorStudio();
	const isLoading = useLoadingCreatorStudio();

	// TODO @김현규 스켈레톤 UI
	if (isLoading) {
		return <>로딩중</>;
	}

	return (
		<StyledCategoryList>
			{studio.profile.categories.map((categoryType) => (
				<li key={categoryType}>
					<CategoryChip categoryType={categoryType} />
				</li>
			))}
		</StyledCategoryList>
	);
}

export default CreatorIntroductionCategories;
