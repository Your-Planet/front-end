import { Box, Typography } from "@mui/material";
import Image from "next/image";

import React from "react";

function Banner() {
	return (
		<>
			<Image
				className="w-full h-full object-cover z-[-1]"
				src="/images/search-banner.png"
				alt="search-banner"
				fill
				priority
				draggable={false}
			/>
			<Box className="flex flex-col">
				<Typography className="text-white cursor-default select-none" variant="h5">
					다양한 인스타툰 작가를 찾아보세요
				</Typography>
			</Box>
		</>
	);
}

export default Banner;
