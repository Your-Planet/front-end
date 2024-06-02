"use client";

import { CATEGORY_SELECT_BOX_WIDTH } from "@/components/search/components/SearchAuthorFormView/components/defines/constants";
import { CategoryProps } from "@/components/search/components/SearchAuthorFormView/components/Filter/defines/types";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

function Category(props: CategoryProps) {
	const { selectedCategories, splitCategoriesFromSearchParams, onChangeCategories } = props;
	const searchParams = useSearchParams();

	const categories = Object.entries(INSTATOON_CATEGORY_NAME_BY_TYPE).map(([instatoonCategoryType, label]) => ({
		instatoonCategoryType,
		label,
	}));

	useEffect(() => {
		const categories = searchParams.get("categories");

		if (categories) {
			splitCategoriesFromSearchParams(categories);
		}
	}, [searchParams]);

	return (
		<FormControl>
			<InputLabel />
			<Select
				multiple
				value={selectedCategories}
				size="small"
				displayEmpty
				renderValue={() => "카테고리"}
				onChange={onChangeCategories}
				sx={{
					width: CATEGORY_SELECT_BOX_WIDTH,
				}}
				MenuProps={{
					MenuListProps: {
						sx: {
							display: "grid",
							gridTemplateColumns: "repeat(3, 1fr)",
						},
					},
				}}
			>
				{categories.map(({ instatoonCategoryType, label }) => (
					<MenuItem key={instatoonCategoryType} value={instatoonCategoryType}>
						<Checkbox checked={selectedCategories.includes(instatoonCategoryType as InstatoonCategoryType)} />
						<ListItemText primary={label} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default Category;
