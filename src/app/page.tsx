"use client";

import { Box } from "@mui/material";
import { NextPage } from "next";
import HomeVideo from "@/components/common/layout/Home/";
import OurWork from "@/components/common/layout/OurWork/";
import OurTeam from "@/components/common/layout/OurTeam/index";

const Home: NextPage = () => {
	return (
		<Box>
			<div className="w-full section-height">
				<section id="home">
					<HomeVideo />
				</section>
			</div>
			<div className="w-full section-height">
				<section id="our_work">
					<OurWork />
				</section>
			</div>
			<div className="w-full section-height">
				<section id="our_team">
					<OurTeam />
				</section>
			</div>
		</Box>
	);
};

export default Home;
