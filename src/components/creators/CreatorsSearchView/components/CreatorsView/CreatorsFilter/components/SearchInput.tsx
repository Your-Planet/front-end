"use client";

import { SearchCreatorsProps } from "@/components/creators/CreatorsSearchView/components/CreatorsView/CreatorsFilter";
import {
	CREATORS_KEYWORD_TYPE,
	CREATORS_KEYWORD_TYPE_BOX_WIDTH,
} from "@/components/creators/CreatorsSearchView/components/CreatorsView/CreatorsFilter/defines/constants";
import { CreatorsKeywordType } from "@/components/creators/CreatorsSearchView/components/CreatorsView/CreatorsFilter/defines/type";
import { useCreatorsSearchParams } from "@/components/creators/CreatorsSearchView/hooks/useCreatorsSearchParams";
import useRouterPushWithParams from "@/components/creators/CreatorsSearchView/hooks/useRouterPushWithParams";

import { Box, InputBase, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { ChangeEvent, KeyboardEvent, useState } from "react";

function SearchInput(props: SearchCreatorsProps) {
	const { handleSearchCreators } = props;
	const { getKeywordType, getCreatorsParamsFromURL } = useCreatorsSearchParams();
	const routerPushWithParams = useRouterPushWithParams();
	const [keywordType, setKeywordType] = useState<CreatorsKeywordType>(getKeywordType());
	const [keyword, setKeyword] = useState<string>("");

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
			handleSearchCreators({ ...getCreatorsParamsFromURL(), keywordType, keyword });
		}
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
					minWidth: `${CREATORS_KEYWORD_TYPE_BOX_WIDTH}px`,
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
				}}
				onChange={handleSelectChange}
			>
				{Object.entries(CREATORS_KEYWORD_TYPE).map(([keywordType, label]) => (
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
			</Box>
		</Box>
	);
}

export default SearchInput;
