"use client";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { LABEL_BY_GENRE_TYPE } from "./defines/constants";
import { useRecoilState } from "recoil";
import { GenreType } from "./defines/types";
import { genreContext } from "@/recoil/atoms/search";

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
					{Object.entries(LABEL_BY_GENRE_TYPE).map(([genreType, label], index) => (
						<Tab label={label} value={genreType} key={index} />
					))}
				</TabList>
			</TabContext>
		</Box>
	);
}

export default GenreTabs;
