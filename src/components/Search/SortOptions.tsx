"use client";

import {
	Box,
	Button,
	FormControl,
	InputLabel,
	Menu,
	MenuItem,
	Select,
	SelectChangeEvent,
	Typography,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { GenreType, SortOptionType } from "./defines/types";
import { LABEL_BY_GENRE_TYPE } from "./defines/constants";

type Props = {
	tabValue: GenreType;
	countOfCards: number;
	sortOption: SortOptionType;
	setSortOption: React.Dispatch<React.SetStateAction<SortOptionType>>;
};

function SortOptions(props: Props) {
	const { tabValue, countOfCards, sortOption, setSortOption } = props;
	const [genre, setGenre] = useState<string>("전체");
	const stringForCount = `${genre}: ${countOfCards}`;

	const handleDropDownMenuChange = (event: SelectChangeEvent) => {
		const { value } = event.target;

		switch (value) {
			case "LATEST":
				setSortOption("LATEST");
				break;
			case "POPULARITY":
				setSortOption("POPULARITY");
				break;
			case "ALPHABETICAL":
				setSortOption("ALPHABETICAL");
				break;
		}
	};

	useEffect(() => {
		setGenre(LABEL_BY_GENRE_TYPE[tabValue]);
	}, [tabValue]);

	return (
		<Box className="flex">
			<Box className="flex w-full justify-between items-center">
				<Typography variant="subtitle2">{stringForCount}</Typography>
				<FormControl className="w-min" size="small">
					<Select value={sortOption} onChange={handleDropDownMenuChange}>
						<MenuItem value="LATEST">최신순</MenuItem>
						<MenuItem value="POPULARITY">인기순</MenuItem>
						<MenuItem value="ALPHABETICAL">이름순</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</Box>
	);
}

export default SortOptions;
