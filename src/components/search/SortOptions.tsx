"use client";

import { sortOptionContext } from "@/recoil/atoms/search";
import { genreState } from "@/recoil/selectors/search";
import { Box, FormControl, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { GenreType, SortOptionType } from "./defines/types";

type Props = {
	countOfCards: number;
};

function SortOptions(props: Props) {
	const { countOfCards } = props;
	const [sortOption, setSortOption] = useRecoilState<SortOptionType>(sortOptionContext);
	const genre = useRecoilValue<GenreType>(genreState);
	const stringForCount = `${LABEL_BY_GENRE_TYPE[genre]}: ${countOfCards}`;

	const handleDropDownMenuChange = (event: SelectChangeEvent<SortOptionType>) => {
		setSortOption(event.target.value as SortOptionType);
	};

	return (
		<Box className="flex">
			<Box className="flex w-full justify-between items-center">
				<Typography variant="subtitle2">{stringForCount}</Typography>
				<FormControl className="w-min" size="small">
					<Select value={sortOption} onChange={handleDropDownMenuChange}>
						{Object.entries(LABEL_BY_SORT_OPTION_TYPE).map((option) => (
							<MenuItem value={option[0]} key={option[0]}>
								{option[1]}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Box>
		</Box>
	);
}

export default SortOptions;
