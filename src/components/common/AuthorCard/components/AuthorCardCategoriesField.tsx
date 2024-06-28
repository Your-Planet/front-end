import { AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import CategoryChip from "@/components/common/CategoryChip";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Skeleton, Stack } from "@mui/material";

type AuthorCardCategoriesFieldProps = AuthorCardFieldProps<InstatoonCategoryType[]>;

function AuthorCardCategoriesField(props: AuthorCardCategoriesFieldProps) {
	const { value } = props;

	const isLoading = useAuthorCardLoadingContext();

	return (
		<Stack direction="row" spacing={1}>
			{isLoading
				? Array.from({ length: 3 }).map((_, i) => (
						<Skeleton key={i} variant="rounded" sx={{ borderRadius: 10 }} width={38} height={24} />
					))
				: value.map((category) => <CategoryChip key={category} categoryType={category} />)}
		</Stack>
	);
}

export default AuthorCardCategoriesField;
