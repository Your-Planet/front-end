"use client";

import { Box } from "@mui/material";
import { NextPage } from "next";
import HomeVideo from "@/components/common/layout/Home/";
import OurWork from "@/components/common/layout/OurWork/";
import OurTeam from "@/components/common/layout/OurTeam/index";

const Home: NextPage = () => {
	return (
		<Box>
			<Box className="w-full h-except-header">
				<section id="home">
					<HomeVideo />
				</section>
			</Box>
			<Box className="w-full h-except-header">
				<section id="our_work">
					<OurWork />
				</section>
			</Box>
			<Box className="w-full h-except-header">
				<section id="our_team">
					<OurTeam />
				</section>
			</Box>
		</Box>
	);
};

export default Home;
