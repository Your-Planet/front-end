"use client";

import Banner from "@/components/search/Banner";
import GenreTabs from "@/components/search/GenreTabs";
import MainSection from "@/components/search/MainSection";
import SortOptions from "@/components/search/SortOptions";
import { Box } from "@mui/material";
import { useRef } from "react";

function SearchPage() {
	const genreTabsRef = useRef<HTMLDivElement>(null);

	return (
		<Box>
			<Box className="w-full h-[calc(100vh-72px)] relative flex items-center px-[150px] box-border bg-[#f8f8fe]">
				<Banner />
			</Box>
			<Box className="flex w-full justify-center items-center">
				<Box className="min-w-[50%] max-w-min">
					<GenreTabs genreTabsRef={genreTabsRef} />
					<SortOptions />
					<MainSection />
				</Box>
			</Box>
		</Box>
	);
}

export default SearchPage;
