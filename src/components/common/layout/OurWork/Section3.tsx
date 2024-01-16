import { Box } from "@mui/material";
import Image from "next/image";
import { forwardRef } from "react";
import H4Bold from "../../text/H4Bold";

const Section3 = forwardRef((props, ref) => {
	return (
		<Box className="flex w-full h-except-header justify-center items-center opacity-0" ref={ref}>
			<Box>
				<H4Bold text="유어플래닛과 함께하면" />
				<H4Bold text="더 자유롭게, 더 전문적으로 성장할 수 있어요" />
			</Box>
			<Box className="relative w-[30%] h-[280px] mt-10">
				<Image src="/images/grow_up.png" alt="grow_up" width={300} height={300} />
			</Box>
		</Box>
	);
});

export default Section3;
