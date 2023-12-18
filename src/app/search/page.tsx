"use client";

import React, { useRef, useState } from "react";
import Banner from "@/components/Search/Banner";
import ScrollDownSection from "@/components/Search/ScrollDownSection";
import GenreTabs from "@/components/Search/GenreTabs";
import MainSection from "@/components/Search/MainSection";
import { GenreType, SortOptionType } from "@/components/Search/defines/types";
import { Box } from "@mui/material";
import SortOptions from "@/components/Search/SortOptions";

const SearchPage = () => {
	const [tabValue, setTabValue] = useState<GenreType>("ALL");
	const [sortOption, setSortOption] = useState<SortOptionType>("LATEST");
	const genreTabsRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<Box className="w-full h-[calc(100vh-72px)] relative flex items-center p-10 box-border">
				<Banner />
			</Box>
			<Box className="w-full px-12 md:px-24 lg:px-36">
				<ScrollDownSection targetRef={genreTabsRef} />
				<GenreTabs tabValue={tabValue} setTabValue={setTabValue} genreTabsRef={genreTabsRef} />
				<SortOptions tabValue={tabValue} countOfCards={5} sortOption={sortOption} setSortOption={setSortOption} />
				<MainSection />
			</Box>
		</>
	);
};

export default SearchPage;
