"use client";

import { useCreatorsSearchParams } from "@/components/creators/CreatorsSearchView/hooks/useCreatorsSearchParams";
import useRouterPushWithParams from "@/components/creators/CreatorsSearchView/hooks/useRouterPushWithParams";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Box, Chip } from "@mui/material";

function AppliedFilterChip() {
	const routerPushWithParams = useRouterPushWithParams();
	const { getFilteredCategoriesFromURL } = useCreatorsSearchParams();
	const selectedCategories = getFilteredCategoriesFromURL();

	const handleDelete = (deletedCategory: string) => {
		const categories = selectedCategories?.filter((category) => category !== deletedCategory).join(",");

		routerPushWithParams("categories", categories);
	};

	return (
		<Box
			sx={{
				display: "flex",
				flexWrap: "wrap",
				gap: "1rem",
			}}
		>
			{selectedCategories?.map((category) => (
				<Chip
					key={category}
					label={INSTATOON_CATEGORY_NAME_BY_TYPE[category as InstatoonCategoryType]}
					color="primary"
					onDelete={() => handleDelete(category)}
				/>
			))}
		</Box>
	);
}

export default AppliedFilterChip;
