import { Typography } from "@mui/material";

import React from "react";
import SearchButton from "./SearchButton";

const Search = () => {
	return (
		<div className="flex flex-col">
			<Typography className="text-white cursor-default select-none" variant="h3">
				인스타툰 작가 찾기
			</Typography>
			<SearchButton />
		</div>
	);
};

export default Search;
