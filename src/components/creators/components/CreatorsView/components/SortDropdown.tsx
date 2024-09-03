"use client";

import {
	SORT_BY_BOX_WIDTH,
	SORT_BY_LABEL,
} from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/constants";
import { SortByType } from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/type";
import { useCreatorsSearchParams } from "@/components/creators/hooks/useCreatorsSearchParams";
import useRouterPushWithParams from "@/components/creators/hooks/useRouterPushWithParams";
import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { SetStateAction } from "react";

type Props = {
	setSortType: (value: SetStateAction<SortByType>) => void;
};

function SortDropdown(props: Props) {
	const { setSortType } = props;
	const { getSortByFromURL } = useCreatorsSearchParams();
	const routerPushWithParams = useRouterPushWithParams();
	const selectedSorting = getSortByFromURL();

	const handleChangeSortType = (event: SelectChangeEvent<typeof selectedSorting>) => {
		const {
			target: { value },
		} = event;
		routerPushWithParams("sortBy", value);
		setSortType(value as SortByType);
	};

	return (
		<Select
			size="small"
			sx={{ width: `${SORT_BY_BOX_WIDTH}px` }}
			value={selectedSorting}
			onChange={handleChangeSortType}
		>
			{Object.entries(SORT_BY_LABEL).map(([sortByType, label]) => (
				<MenuItem key={sortByType} value={sortByType}>
					{label}
				</MenuItem>
			))}
		</Select>
	);
}

export default SortDropdown;
