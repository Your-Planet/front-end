import { AuthorCardFieldProps } from "@/components/common/AuthorCard";
import { useAuthorCardLoadingContext } from "@/components/common/AuthorCard/providers/AuthorCardLoadingProvider";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Chip, Skeleton, Stack } from "@mui/material";

type AuthorCardCategoriesFieldProps = AuthorCardFieldProps<InstatoonCategoryType[]>;

function AuthorCardCategoriesField(props: AuthorCardCategoriesFieldProps) {
	const { value } = props;

	const isLoading = useAuthorCardLoadingContext();

	return (
		<Stack direction="row" spacing={1}>
			{isLoading
				? Array.from({ length: 3 }).map(() => (
						<Skeleton variant="rounded" sx={{ borderRadius: 10 }} width={38} height={24} />
					))
				: value.map((category) => (
						<Chip key={category} label={INSTATOON_CATEGORY_NAME_BY_TYPE[category]} color="primary" size="small" />
					))}
		</Stack>
	);
}

export default AuthorCardCategoriesField;
