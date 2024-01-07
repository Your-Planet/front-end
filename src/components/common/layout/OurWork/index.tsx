import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import { HEADER_HEIGHT } from "../Header/defines/constants";

const OurWork = () => {
	return (
		<Box className={`w-full h-except-header relative`}>
			<Image src="/images/sample.png" alt="YourPlanet" fill />
		</Box>
	);
};

export default OurWork;
