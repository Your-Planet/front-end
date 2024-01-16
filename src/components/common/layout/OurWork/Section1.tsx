import { Box } from "@mui/material";
import Image from "next/image";
import { forwardRef } from "react";
import H4Bold from "../../text/H4Bold";

const Section1 = forwardRef((props, ref) => {
	return (
		<Box className="flex items-center justify-evenly w-full h-except-header opacity-0" ref={ref}>
			<H4Bold text="작품에만 집중하기 어려운 작가님들을 위해" />
			<Image src="/images/hard.png" alt="hard" width={250} height={300} />
		</Box>
	);
});

export default Section1;
