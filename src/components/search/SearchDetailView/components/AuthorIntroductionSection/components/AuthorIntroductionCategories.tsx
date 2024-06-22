import CategoryChip from "@/components/common/CategoryChip";
import { useAuthorIntroductionStudio } from "@/components/search/SearchDetailView/providers/AuthorIntroductionStudioProvider";
import { styled } from "@mui/material";

const StyledCategoryList = styled("ul")`
	display: flex;
	gap: 4px;
	margin-top: 12px;
`;

function AuthorIntroductionCategories() {
	const studio = useAuthorIntroductionStudio();

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

export default AuthorIntroductionCategories;
