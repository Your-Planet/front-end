"use client";

import { Box, Tab, Tabs } from "@mui/material";
import { TabContext, TabList } from "@mui/lab";
import { GenreType } from "./defines/types";

type Props = {
	tabValue: string;
	setTabValue: React.Dispatch<React.SetStateAction<GenreType>>;
	genreTabsRef: React.RefObject<HTMLDivElement>;
};

const GenreTabs = (props: Props) => {
	const { tabValue, setTabValue, genreTabsRef } = props;

	const handleTabsChange = (event: React.SyntheticEvent, newTabValue: GenreType) => {
		setTabValue(newTabValue);
	};

	return (
		<Box className="flex justify-center" ref={genreTabsRef}>
			<TabContext value={tabValue}>
				<TabList onChange={handleTabsChange}>
					<Tab label="전체" value="ALL" />
					<Tab label="일상" value="DAILY" />
					<Tab label="유머" value="HUMOR" />
					<Tab label="연애" value="DATE" />
					<Tab label="힐링" value="HEALING" />
				</TabList>
			</TabContext>
		</Box>
	);
};

export default GenreTabs;
