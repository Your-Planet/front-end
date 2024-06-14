"use client";

import {
	SEARCH_BY_BOX_WIDTH,
	SEARCH_BY_LABEL,
} from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/defines/constants";
import { SearchByType } from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/defines/type";
import useRouterPushWithParams from "@/components/search/hooks/useRouterPushWithParams";
import { Box, InputBase, MenuItem, Select } from "@mui/material";
import { useSearchParams } from "next/navigation";

function SearchInput() {
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const searchBy = searchParams.get("searchBy") ?? ("name" as SearchByType);

	return (
		<Box
			sx={{
				display: "flex",
				height: "40px",
				alignItems: "center",
				border: "1px solid rgba(0,0,0,.26)",
				borderRadius: "4px",
			}}
		>
			<Select
				variant="standard"
				defaultValue={searchBy}
				size="small"
				displayEmpty
				sx={{
					width: `${SEARCH_BY_BOX_WIDTH}px`,
					padding: 0,
				}}
				disableUnderline
			>
				{Object.entries(SEARCH_BY_LABEL).map(([searchByType, label]) => (
					<MenuItem key={searchByType} value={searchByType}>
						{label}
					</MenuItem>
				))}
			</Select>
			<InputBase size="small" sx={{ border: 0 }} />
		</Box>
	);
}

export default SearchInput;
