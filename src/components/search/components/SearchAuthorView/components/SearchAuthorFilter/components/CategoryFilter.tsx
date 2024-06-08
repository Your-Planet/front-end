"use client";

import { CATEGORY_SELECT_BOX_WIDTH } from "@/components/search/components/SearchAuthorView/components/defines/constants";
import { INSTATOON_CATEGORY_NAME_BY_TYPE } from "@/defines/instatoon-category/constants";
import { InstatoonCategoryType } from "@/defines/instatoon-category/types";
import { Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function CategoryFilter(props: {}) {
	const router = useRouter();
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const [selectedCategories, setSelectedCategories] = useState<InstatoonCategoryType[]>([]);

	const changeCategories = (categories: InstatoonCategoryType[]) => {
		setSelectedCategories(categories as InstatoonCategoryType[]);

		if (categories.length) {
			router.push(`${pathname}?categories=${categories.join(",")}`, {
				scroll: false,
			});
		} else {
			router.push(`${pathname}`, {
				scroll: false,
			});
		}
	};

	useEffect(() => {
		const categoriesSearchParams = searchParams
			.get("categories")
			?.split(",")
			.filter((category) => category);

		if (categoriesSearchParams) {
			changeCategories(categoriesSearchParams as InstatoonCategoryType[]);
		} else {
			changeCategories([]);
		}
	}, [searchParams]);

	const categories = Object.entries(INSTATOON_CATEGORY_NAME_BY_TYPE).map(([instatoonCategoryType, label]) => ({
		instatoonCategoryType,
		label,
	}));

	const handleChangeCategories = (event: SelectChangeEvent<typeof selectedCategories>) => {
		const categories = event.target.value
			?.toString()
			.split(",")
			.filter((category) => category);

		changeCategories(categories);
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

export default CategoryFilter;
