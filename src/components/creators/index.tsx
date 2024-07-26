"use client";

import Banner from "@/components/creators/components/Banner";
import BlurBox from "@/components/creators/components/BlurBox";
import SearchCreatorView from "@/components/creators/components/SearchCreatorsView";
import { StyledBannerBox, StyledContainerBox, StyledInnerBox } from "@/components/creators/defines/styles";
import { COOKIE } from "@/defines/cookie/constants";
import { getCookie } from "@/utils/cookie";
import { Box } from "@mui/material";
import { useRef } from "react";

type Props = {};

function SearchPageView({}: Props) {
	const genreTabsRef = useRef<HTMLDivElement>(null);

	const accessToken = getCookie(COOKIE.accessToken);

	return (
		<Box width="100%">
			<StyledBannerBox>
				<Banner />
			</StyledBannerBox>
			<StyledContainerBox>
				{!accessToken && <BlurBox />}
				<StyledInnerBox>
					<SearchCreatorView />
				</StyledInnerBox>
			</StyledContainerBox>
		</Box>
	);
}

export default SearchPageView;