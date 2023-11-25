import { Box } from "@mui/material";
import Image from "next/image";
import sample from "../../../../public/images/sample.webp";
import React from "react";

const OurWork = () => {
	return (
		<Box className="w-full h-screen relative">
			<Image src={sample} alt="YourPlanet" fill />
		</Box>
	);
};

export default OurWork;
