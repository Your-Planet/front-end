"use client";

import Banner from "@/components/creators/components/Banner";
import CreatorsView from "@/components/creators/components/CreatorsView";
import { StyledBannerBox, StyledContainerBox, StyledInnerBox } from "@/components/creators/defines/styles";
import { Box } from "@mui/material";

type Props = {};

function CreatorsPageView({}: Props) {
	return (
		<Box width="100%">
			<StyledBannerBox>
				<Banner />
			</StyledBannerBox>
			<StyledContainerBox>
				<StyledInnerBox>
					<CreatorsView />
				</StyledInnerBox>
			</StyledContainerBox>
		</Box>
	);
}

export default CreatorsPageView;
