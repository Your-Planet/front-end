import { Box } from "@mui/material";
import Image from "next/image";
import H4Bold from "../../text/H4Bold";

function Section2() {
	return (
		<Box className="flex flex-col w-full h-except-header justify-center items-center">
			<H4Bold text="복잡한 광고주와의 거래, 마케팅, 거래과정, 사후처리를 한번에" />
			<Box className="relative w-[50%] h-[280px] mt-10">
				<Image src="/images/one_queue.png" alt="one_queue" fill />
			</Box>
		</Box>
	);
}

export default Section2;
