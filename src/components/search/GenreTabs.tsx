"use client";

import { genreContext } from "@/recoil/atoms/search";
import { TabContext, TabList } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import { useRecoilState } from "recoil";
import { LABEL_BY_GENRE_TYPE } from "./defines/constants";
import { GenreType } from "./defines/types";

type Props = {
	genreTabsRef: React.RefObject<HTMLDivElement>;
};

function GenreTabs(props: Props) {
	const { genreTabsRef } = props;
	const [genre, setGenre] = useRecoilState<GenreType>(genreContext);

	const handleTabsChange = (event: React.SyntheticEvent, newGenre: GenreType) => {
		setGenre(newGenre);
	};

	return (
		<Box className="flex justify-center" ref={genreTabsRef}>
			<TabContext value={genre}>
				<TabList onChange={handleTabsChange}>
					{Object.entries(LABEL_BY_GENRE_TYPE).map(([genreType, label]) => (
						<Tab label={label} value={genreType} key={genreType} />
					))}
				</TabList>
			</TabContext>
		</Box>
	);
}

export default GenreTabs;