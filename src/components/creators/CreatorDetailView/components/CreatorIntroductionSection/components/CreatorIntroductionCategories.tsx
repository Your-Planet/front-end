import CategoryChip from "@/components/common/CategoryChip";
import { useCreatorStudio } from "@/components/creators/CreatorDetailView/providers/CreatorStudioProvider";
import { styled } from "@mui/material";

const StyledCategoryList = styled("ul")`
	display: flex;
	gap: 4px;
	margin-top: 12px;
`;

function CreatorIntroductionCategories() {
	const studio = useCreatorStudio();

	// TODO @김현규 스켈레톤 UI
	if (!studio) {
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
