"use client";

import {
	KEYWORD_TYPE_BOX_WIDTH,
	KEYWORD_TYPE_LABEL,
} from "@/components/creators/components/CreatorsView/components/SearchFilter/defines/constants";
import { KeywordType } from "@/components/creators/components/CreatorsView/components/SearchFilter/defines/type";
import useRouterPushWithParams from "@/components/creators/hooks/useRouterPushWithParams";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

type Props = {
	handleClickSearch: Function;
};

function SearchInput(props: Props) {
	const { handleClickSearch } = props;
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const [keywordType, setKeywordType] = useState<string>(
		searchParams.get("keywordType") ?? ("toonName" as KeywordType),
	);
	const [keyword, setKeyword] = useState<string>("");

	useEffect(() => {
		setKeywordType(searchParams.get("keywordType") ?? ("toonName" as KeywordType));
		setKeyword(searchParams.get("keyword") ?? "");
	}, [searchParams]);

	const handleSelectChange = (event: SelectChangeEvent) => {
		setKeywordType(event.target.value);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setKeyword(event.target.value);
	};

	const handleInputKeyUp = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (event.key === "Enter") {
			routerPushWithParams(["keywordType", "keyword"], [keywordType, keyword]);
			handleClickSearch();
		}
	};

	const handleClickSearchIcon = () => {
		routerPushWithParams(["keywordType", "keyword"], [keywordType, keyword]);
		handleClickSearch();
	};

	return (
		<Box
			sx={{
				display: "flex",
			}}
		>
			<Select
				value={keywordType}
				size="small"
				displayEmpty
				sx={{
					minWidth: `${KEYWORD_TYPE_BOX_WIDTH}px`,
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
				}}
				onChange={handleSelectChange}
			>
				{Object.entries(KEYWORD_TYPE_LABEL).map(([keywordType, label]) => (
					<MenuItem key={keywordType} value={keywordType}>
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
					value={keyword}
					inputProps={{ style: { padding: 0 } }}
					onChange={handleInputChange}
					onKeyUp={handleInputKeyUp}
				/>
				<IconButton type="button" size="small" onClick={handleClickSearchIcon}>
					<SearchIcon />
				</IconButton>
			</Box>
		</Box>
	);
}

export default SearchInput;
