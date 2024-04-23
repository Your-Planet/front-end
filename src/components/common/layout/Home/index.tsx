"use client";

import { StyledBoxInHome } from "@/components/common/layout/defines/styles";
import OurTeam from "@/components/common/layout/Home/components/OurTeam";
import OurWork from "@/components/common/layout/Home/components/OurWork";
import Slogan from "@/components/common/layout/Home/components/Slogan";
import { Box } from "@mui/material";

type Props = {};

function HomeView({}: Props) {
	return (
		<Box>
			<StyledBoxInHome>
				<Slogan />
			</StyledBoxInHome>
			<StyledBoxInHome>
				<OurWork />
			</StyledBoxInHome>
			<StyledBoxInHome>
				<OurTeam />
			</StyledBoxInHome>
		</Box>
	);
}

export default HomeView;
