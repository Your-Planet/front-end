"use client";

import { selectedGenreContext } from "@/recoil/atoms/post_me";
import { Box, FormControl, FormGroup, FormHelperText, Typography } from "@mui/material";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";
import { SELECTED_GENRE_LIMIT } from "../../defines/post_me/constants";
import HelpIcon from "../common/HelpIcon/index";
import { LABEL_BY_GENRE_TYPE } from "../search/defines/constants";
import { GenreType } from "../search/defines/types";
import GenreCheckBox from "./GenreCheckBox";

function InstatoonCategory() {
	const [selectedGenre, setSelectedGenre] = useRecoilState<Set<GenreType>>(selectedGenreContext);

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { checked, name } = event.target;
		const updatedGenre = new Set(selectedGenre);

		if (checked) {
			updatedGenre.add(name as GenreType);
		} else {
			updatedGenre.delete(name as GenreType);
		}

		setSelectedGenre(updatedGenre);
	};

	const error = selectedGenre.size > SELECTED_GENRE_LIMIT;
	const errorMessage = `최대 ${SELECTED_GENRE_LIMIT}개를 선택해 주세요`;

	return (
		<Box className="flex flex-col w-[50vw] h-fit">
			<FormControl variant="standard" error={error}>
				<Box className="flex items-center">
					<Typography variant="body1">인스타툰 카테고리</Typography>
					<HelpIcon />
				</Box>
				<FormGroup>
					{Object.entries(LABEL_BY_GENRE_TYPE)
						.filter((value) => value[0] !== "ALL")
						.map((value) => {
							const [genre, label] = value;

							return (
								<GenreCheckBox
									key={genre}
									label={label}
									onChange={handleChange}
									checked={selectedGenre.has(genre as GenreType)}
									name={genre}
								/>
							);
						})}
				</FormGroup>
				<FormHelperText className={`${error ? "" : "opacity-0"} text-red-600`}>{errorMessage}</FormHelperText>
			</FormControl>
		</Box>
	);
}

export default InstatoonCategory;
