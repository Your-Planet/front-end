"use client";

import { Box, Tab } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { GenreType } from "./defines/types";
import { LABEL_BY_GENRE_TYPE } from "./defines/constants";

type Props = {
	tabValue: string;
	setTabValue: React.Dispatch<React.SetStateAction<GenreType>>;
	genreTabsRef: React.RefObject<HTMLDivElement>;
};

function GenreTabs(props: Props) {
	const { tabValue, setTabValue, genreTabsRef } = props;

	const handleTabsChange = (event: React.SyntheticEvent, newTabValue: GenreType) => {
		setTabValue(newTabValue);
	};

	return (
		<Box className="flex justify-center" ref={genreTabsRef}>
			<TabContext value={tabValue}>
				<TabList onChange={handleTabsChange}>
					{Object.entries(LABEL_BY_GENRE_TYPE).map((genre, index) => (
						<Tab label={genre[1]} value={genre[0]} key={index} />
					))}
				</TabList>
			</TabContext>
		</Box>
	);
}

export default GenreTabs;
