"use client";

import CreatorCard from "@/components/common/CreatorCard";
import Banner from "@/components/creators/components/Banner";
import BlurBox from "@/components/creators/components/BlurBox";
import { StyledBannerBox, StyledContainerBox } from "@/components/creators/defines/styles";
import { Box } from "@mui/material";

type Props = {};

// TODO: @나은찬, 더미 카드 채우기
const dummyProfile = {
	name: "dummy",
	description: "dummy",
	categories: [],
	profileImageUrl: "",
};
const BUTTON_TOOLTIP_MESSAGE = "미리보기에서는 지원하지 않는 기능입니다.";

function DummyPageView({}: Props) {
	return (
		<Box width="100%">
			<StyledBannerBox>
				<Banner />
			</StyledBannerBox>
			<StyledContainerBox>
				<BlurBox />
				<Box display="flex" gap="1rem" flexWrap="wrap">
					{[...Array(8)].map((_, index) => (
						<CreatorCard
							key={index}
							profile={dummyProfile}
							instagramUsername="dummy"
							buttonEvent={{
								project: {
									tooltip: BUTTON_TOOLTIP_MESSAGE,
								},
								detail: {
									tooltip: BUTTON_TOOLTIP_MESSAGE,
								},
							}}
						/>
					))}
				</Box>
			</StyledContainerBox>
		</Box>
	);
}

export default DummyPageView;
