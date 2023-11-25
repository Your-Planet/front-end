import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurWork = () => {
	return (
		<Box className="w-full h-screen relative">
			<Image src="/images/sample.png" alt="YourPlanet" fill />
		</Box>
	);
};

export default OurWork;
