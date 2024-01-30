"use client";

import { selectedGenreContext } from "@/recoil/atoms/post_me";
import { getSelectGenreValidateRule } from "@/utils/react-hook-form/rule";
import { Box, FormControl, FormGroup, Typography } from "@mui/material";
import { ChangeEvent, useEffect } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import HelpIcon from "../common/HelpIcon/index";
import ReactHookForm from "../common/ReactHookForm/index";
import { LABEL_BY_GENRE_TYPE } from "../search/defines/constants";
import { GenreType } from "../search/defines/types";
import { PostMeForm } from "./defines/types";

function InstatoonCategory() {
	const [selectedGenre, setSelectedGenre] = useRecoilState<Set<GenreType>>(selectedGenreContext);
	const resetSelectedGenre = useResetRecoilState(selectedGenreContext);
	const { CheckboxGroup } = ReactHookForm<PostMeForm>();

	const getCheckboxes = () =>
		Object.entries(LABEL_BY_GENRE_TYPE)
			.filter((value) => value[0] !== "ALL")
			.map((value) => {
				const [genre, label] = value;

				return {
					label,
					value: genre as GenreType,
					checked: selectedGenre.has(genre as GenreType),
					name: genre,
				};
			});

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

	useEffect(() => {
		return () => {
			resetSelectedGenre();
		};
	}, [resetSelectedGenre]);

	return (
		<Box className="flex flex-col w-[50vw] h-fit">
			<FormControl variant="standard">
				<Box className="flex items-center">
					<Typography>인스타툰 카테고리</Typography>
					<HelpIcon />
				</Box>
				<FormGroup>
					<CheckboxGroup<GenreType>
						label=""
						formName="instatoonGenre"
						onChange={handleChange}
						rules={{
							...getSelectGenreValidateRule(selectedGenre),
						}}
						checkboxes={getCheckboxes()}
					/>
				</FormGroup>
			</FormControl>
		</Box>
	);
}

export default InstatoonCategory;
