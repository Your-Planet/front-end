import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Chip } from "@mui/material";

export interface CategoryChipProps {
	categoryType: InstatoonCategoryType;
}

function CategoryChip(props: CategoryChipProps) {
	const { categoryType } = props;

	return <Chip key={categoryType} label={INSTATOON_CATEGORY_NAME_BY_TYPE[categoryType]} color="primary" size="small" />;
}

export default CategoryChip;
