"use client";

import { Element } from "react-scroll";
import { Box } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = () => {
	return (
		<Box>
			<div className="w-screen h-screen">
				<Element name="HOME">Home</Element>
			</div>
			<div className="w-screen h-screen">
				<Element name="OUR_WORK">Work</Element>
			</div>
			<div className="w-screen h-screen">
				<Element name="OUR_TEAM">Team</Element>
			</div>
		</Box>
	);
};

export default Home;
