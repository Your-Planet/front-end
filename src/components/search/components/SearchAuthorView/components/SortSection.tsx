"use client";

import {
	SORT_BY_BOX_WIDTH,
	SORT_BY_LABEL,
} from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/defines/constants";
import useRouterPushWithParams from "@/components/search/hooks/useRouterPushWithParams";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useSearchParams } from "next/navigation";

type Props = {};

function SortSection({}: Props) {
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const selectedSorting = searchParams.get("sortBy") ?? "popularity";

	const handleChangeSortBy = (event: SelectChangeEvent<typeof selectedSorting>) => {
		const {
			target: { value },
		} = event;
		routerPushWithParams("sortBy", value);
	};

	return (
		<Select size="small" sx={{ width: `${SORT_BY_BOX_WIDTH}px` }} value={selectedSorting} onChange={handleChangeSortBy}>
			{Object.entries(SORT_BY_LABEL).map(([sortByType, label]) => (
				<MenuItem key={sortByType} value={sortByType}>
					{label}
				</MenuItem>
			))}
		</Select>
	);
}

export default SortSection;
