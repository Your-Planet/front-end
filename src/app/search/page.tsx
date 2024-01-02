"use client";

import React, { useRef, useState } from "react";
import Banner from "@/components/Search/Banner";
import ScrollDownSection from "@/components/Search/ScrollDownSection";
import GenreTabs from "@/components/Search/GenreTabs";
import MainSection from "@/components/Search/MainSection";
import { GenreType, SortOptionType } from "@/components/Search/defines/types";
import { Box } from "@mui/material";
import SortOptions from "@/components/Search/SortOptions";

function SearchPage() {
	const [tabValue, setTabValue] = useState<GenreType>("ALL");
	const [sortOption, setSortOption] = useState<SortOptionType>("LATEST");
	const genreTabsRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<Box className="w-full h-[calc(100vh-72px)] relative flex items-center p-10 box-border">
				<Banner />
			</Box>
			<Box className="flex w-full justify-center items-center">
				<Box className="min-w-[50%] max-w-min">
					<ScrollDownSection targetRef={genreTabsRef} />
					<GenreTabs tabValue={tabValue} setTabValue={setTabValue} genreTabsRef={genreTabsRef} />
					<SortOptions tabValue={tabValue} countOfCards={5} sortOption={sortOption} setSortOption={setSortOption} />
					<MainSection />
				</Box>
			</Box>
		</>
	);
}

export default SearchPage;
