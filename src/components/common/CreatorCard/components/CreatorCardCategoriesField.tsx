import CategoryChip from "@/components/common/CategoryChip";
import { CreatorCardFieldProps } from "@/components/common/CreatorCard";
import { useCreatorCardLoadingContext } from "@/components/common/CreatorCard/providers/CreatorCardLoadingProvider";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Skeleton, Stack } from "@mui/material";

type CreatorCardCategoriesFieldProps = CreatorCardFieldProps<InstatoonCategoryType[]>;

function CreatorCardCategoriesField(props: CreatorCardCategoriesFieldProps) {
	const { value } = props;

	const isLoading = useCreatorCardLoadingContext();

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

export default CreatorCardCategoriesField;
