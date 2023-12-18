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
import React, { useState } from "react";
import { GenreType, SortOptionType } from "./defines/types";
import { useEffect } from "react";
import classNames from "classnames";

type Props = {
	tabValue: GenreType;
	countOfCards: Number;
	sortOption: SortOptionType;
	setSortOption: React.Dispatch<React.SetStateAction<SortOptionType>>;
};

const SortOptions = (props: Props) => {
	const { tabValue, countOfCards, sortOption, setSortOption } = props;
	const [genre, setGenre] = useState<string>("전체");
	const stringForCount = `${genre}: ${countOfCards}`;

	const handleDropDownMenuChange = (event: SelectChangeEvent) => {
		const value = event.target.value;

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
		switch (tabValue) {
			case "ALL":
				setGenre("전체");
				break;
			case "DAILY":
				setGenre("일상");
				break;
			case "DATE":
				setGenre("연애");
				break;
			case "HEALING":
				setGenre("힐링");
				break;
			case "HUMOR":
				setGenre("유머");
				break;
		}
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
};

export default SortOptions;
