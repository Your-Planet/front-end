"use client";

import { GetCreatorsRequest } from "@/apis/studio";
import {
	KEYWORD_TYPE_BOX_WIDTH,
	KEYWORD_TYPE_LABEL,
} from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/constants";
import {
	CreatorsKeywordType,
	DEFAULT_CREATORS_KEYWORD_TYPE,
} from "@/components/creators/components/CreatorsView/components/CreatorsFilter/defines/type";
import useRouterPushWithParams from "@/components/creators/hooks/useRouterPushWithParams";
import { useCreatorsContext } from "@/components/creators/provider/CreatorsProvider";
import SearchIcon from "@mui/icons-material/Search";
import { Box, IconButton, InputBase, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useState } from "react";

type Props = {};

function SearchInput({}: Props) {
	const { handleClickSearch } = useCreatorsContext();
	const routerPushWithParams = useRouterPushWithParams();
	const searchParams = useSearchParams();
	const [keywordType, setKeywordType] = useState<CreatorsKeywordType>(
		(searchParams.get("keywordType") ?? DEFAULT_CREATORS_KEYWORD_TYPE) as CreatorsKeywordType,
	);
	const [keyword, setKeyword] = useState<string>("");

	const getSearchParams = () => {
		const categories = searchParams.get("categories");
		const minPrice = parseInt(searchParams.get("min") ?? "0", 10);
		const maxPrice = parseInt(searchParams.get("max") ?? "0", 10);
		const pageNumber = parseInt(searchParams.get("pageNumber") ?? "0", 10);
		const pageSize = parseInt(searchParams.get("pageSize") ?? "0", 10);

		return {
			...(categories && { categories }),
			...(keywordType && { keywordType }),
			...(keyword && { keyword }),
			...(minPrice && { minPrice }),
			...(maxPrice && { maxPrice }),
			...(pageNumber && { pageNumber }),
			...(pageSize && { pageSize }),
		} as GetCreatorsRequest;
	};

	const handleSelectChange = (event: SelectChangeEvent) => {
		setKeywordType(event.target.value as CreatorsKeywordType);
	};

	const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setKeyword(event.target.value);
	};

	const handleInputKeyDown = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		if (event.nativeEvent.isComposing) {
			return;
		}

		if (event.key === "Enter" && event.code === "Enter") {
			routerPushWithParams(["keywordType", "keyword"], [keywordType, keyword]);
			handleClickSearch(getSearchParams());
		}
	};

	const handleClickSearchIcon = () => {
		routerPushWithParams(["keywordType", "keyword"], [keywordType, keyword]);
		handleClickSearch(getSearchParams());
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
					onKeyDown={handleInputKeyDown}
				/>
				<IconButton type="button" size="small" onClick={handleClickSearchIcon}>
					<SearchIcon />
				</IconButton>
			</Box>
		</Box>
	);
}

export default SearchInput;
