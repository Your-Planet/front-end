"use client";

import Banner from "@/components/creators/CreatorsSearchView/components/Banner";
import CreatorsView from "@/components/creators/CreatorsSearchView/components/CreatorsView";
import {
	StyledBannerBox,
	StyledContainerBox,
	StyledInnerBox,
} from "@/components/creators/CreatorsSearchView/defines/styles";
import { Box } from "@mui/material";

type Props = {};

function CreatorsSearchView({}: Props) {
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

export default CreatorsSearchView;
