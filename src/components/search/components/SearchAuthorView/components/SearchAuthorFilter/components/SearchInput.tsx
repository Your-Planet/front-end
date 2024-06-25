"use client";

import {
	SEARCH_BY_BOX_WIDTH,
	SEARCH_BY_LABEL,
} from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/defines/constants";
import { SearchByType } from "@/components/search/components/SearchAuthorView/components/SearchAuthorFilter/defines/type";
import useRouterPushWithParams from "@/components/search/hooks/useRouterPushWithParams";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

function SearchInput() {
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const [searchBy, setSearchBy] = useState<string>(searchParams.get("searchBy") ?? ("name" as SearchByType));
	const [keyword, setKeyword] = useState<string>("");

	const handleSelectChange = (event: SelectChangeEvent) => {
		setSearchBy(event.target.value);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setKeyword(event.target.value);
	};

	const handleInputKeyUp = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (event.key === "Enter") {
			routerPushWithParams(["searchBy", "keyword"], [searchBy, keyword]);
		}
	};

	return (
		<Box
			sx={{
				display: "flex",
			}}
		>
			<Select
				value={searchBy}
				size="small"
				displayEmpty
				sx={{
					width: `${SEARCH_BY_BOX_WIDTH}px`,
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
				}}
				onChange={handleSelectChange}
			>
				{Object.entries(SEARCH_BY_LABEL).map(([searchByType, label]) => (
					<MenuItem key={searchByType} value={searchByType}>
						{label}
					</MenuItem>
				))}
			</Select>
			<Box
				sx={{
					p: "2px 4px",
					display: "flex",
					alignItems: "center",
					border: "1px solid rgba(0,0,0,.26)",
					borderRadius: "0 4px 4px 0",
					borderLeft: 0,
				}}
			>
				<InputBase
					size="small"
					sx={{ ml: 1, flex: 1 }}
					inputProps={{ style: { padding: 0 } }}
					onChange={handleInputChange}
					onKeyUp={handleInputKeyUp}
				/>
				<IconButton type="button" size="small">
					<SearchIcon />
				</IconButton>
			</Box>
		</Box>
	);
}

export default SearchInput;
