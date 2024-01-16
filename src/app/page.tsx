"use client";

import Slogan from "@/components/common/layout/Home/";
import OurTeam from "@/components/common/layout/OurTeam/index";
import OurWork from "@/components/common/layout/OurWork/";
import { Box } from "@mui/material";

function Home() {
	return (
		<Box>
			<Box className="w-full h-except-header">
				<Slogan />
			</Box>
			<Box className="w-full h-auto">
				<OurWork />
			</Box>
			<Box className="w-full h-auto">
				<OurTeam />
			</Box>
		</Box>
	);
}

export default Home;
