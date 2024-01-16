import { Box } from "@mui/material";
import Image from "next/image";

import { forwardRef } from "react";
import H4Bold from "../../text/H4Bold";

const Section2 = forwardRef((props, ref) => {
	return (
		<Box className="flex flex-col w-full h-except-header justify-center items-center opacity-0" ref={ref}>
			<H4Bold text="복잡한 광고주와의 거래, 마케팅, 거래과정, 사후처리를 한번에" />
			<Box className="relative w-[50%] h-[280px] mt-10">
				<Image src="/images/one_queue.png" alt="one_queue" width={600} height={300} />
			</Box>
		</Box>
	);
});

export default Section2;
