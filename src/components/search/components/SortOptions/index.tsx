"use client";

import { sortOptionContext } from "@/recoil/atoms/search";
import { Box, FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useRecoilState } from "recoil";
import { LABEL_BY_SORT_OPTION_TYPE } from "../../defines/constants";
import { SortOptionType } from "../../defines/types";

type Props = {};

function SortOptions(props: Props) {
	const [sortOption, setSortOption] = useRecoilState<SortOptionType>(sortOptionContext);

	const handleDropDownMenuChange = (event: SelectChangeEvent<SortOptionType>) => {
		setSortOption(event.target.value as SortOptionType);
	};

	return (
		<Box className="flex items-center my-2">
			<Box className="flex w-full justify-end items-center">
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
