"use client";

import React, { useRef } from "react";
import Banner from "@/components/search/Banner";
import ScrollDownSection from "@/components/search/ScrollDownSection";
import GenreTabs from "@/components/search/GenreTabs";
import MainSection from "@/components/search/MainSection";
import { Box } from "@mui/material";
import SortOptions from "@/components/search/SortOptions";

function SearchPage() {
	const genreTabsRef = useRef<HTMLDivElement>(null);

	return (
		<>
			<Box className="w-full h-[calc(100vh-72px)] relative flex items-center p-10 box-border">
				<Banner />
			</Box>
			<Box className="flex w-full justify-center items-center">
				<Box className="min-w-[50%] max-w-min">
					<ScrollDownSection targetRef={genreTabsRef} />
					<GenreTabs genreTabsRef={genreTabsRef} />
					<SortOptions countOfCards={5} />
					<MainSection />
				</Box>
			</Box>
		</>
	);
}

export default SearchPage;
