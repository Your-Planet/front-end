"use client";

import Banner from "@/components/search/components/Banner";
import BlurBox from "@/components/search/components/BlurBox";
import SearchSection from "@/components/search/components/SearchSection";
import { StyledBannerBox, StyledContainerBox, StyledInnerBox } from "@/components/search/defines/styles";
import { COOKIE } from "@/defines/cookie/constants";
import { getCookie } from "@/utils/cookie";
import { Box } from "@mui/material";
import { useRef } from "react";

type Props = {};

function SearchPageView({}: Props) {
	const genreTabsRef = useRef<HTMLDivElement>(null);

	const accessToken = getCookie(COOKIE.accessToken);

	return (
		<Box>
			<StyledBannerBox>
				<Banner />
			</StyledBannerBox>
			<StyledContainerBox>
				{!accessToken && <BlurBox />}
				<StyledInnerBox>
					<SearchSection />
				</StyledInnerBox>
			</StyledContainerBox>
		</Box>
	);
}

export default SearchPageView;
