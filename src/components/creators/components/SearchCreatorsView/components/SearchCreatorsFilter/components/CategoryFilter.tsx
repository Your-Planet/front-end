"use client";

import { CATEGORY_SELECT_BOX_WIDTH } from "@/components/creators/components/SearchCreatorsView/components/SearchCreatorsFilter/defines/constants";
import useRouterPushWithParams from "@/components/creators/hooks/useRouterPushWithParams";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useSearchParams } from "next/navigation";

function CategoryFilter(props: {}) {
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const selectedCategories =
		searchParams
			.get("categories")
			?.split(",")
			.filter((category) => category) ?? [];

	const categories = Object.entries(INSTATOON_CATEGORY_NAME_BY_TYPE).map(([instatoonCategoryType, label]) => ({
		instatoonCategoryType,
		label,
	}));

	const handleChangeCategories = (event: SelectChangeEvent<typeof selectedCategories>) => {
		const categoryFilterValues = event.target.value?.toString();
		routerPushWithParams("categories", categoryFilterValues);
	};

	return (
		<FormControl>
			<InputLabel />
			<Select
				multiple
				value={selectedCategories}
				size="small"
				displayEmpty
				renderValue={() => "카테고리"}
				onChange={handleChangeCategories}
				sx={{
					width: `${CATEGORY_SELECT_BOX_WIDTH}px`,
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
						<Checkbox checked={selectedCategories?.includes(instatoonCategoryType as InstatoonCategoryType)} />
						<ListItemText primary={label} />
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
}

export default CategoryFilter;
