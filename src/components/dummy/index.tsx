"use client";

import Banner from "@/components/creators/components/Banner";
import BlurBox from "@/components/creators/components/BlurBox";
import { StyledBannerBox, StyledContainerBox } from "@/components/creators/defines/styles";
import { Box } from "@mui/material";

type Props = {};

function DummyPageView({}: Props) {
	return (
		<Box width="100%">
			<StyledBannerBox>
				<Banner />
			</StyledBannerBox>
			<StyledContainerBox>
				<BlurBox />
			</StyledContainerBox>
		</Box>
	);
}

export default DummyPageView;
