import { Box } from "@mui/material";
import Image from "next/image";
import H4Bold from "../../text/H4Bold";

function OurWork() {
	return (
		<Box className="w-full h-auto relative">
			<Box className="px-[100px] h-auto">
				<Box className="flex items-center justify-evenly w-full h-except-header">
					<H4Bold text="작품에만 집중하기 어려운 작가님들을 위해" />
					<Image src="/images/hard.png" alt="hard" width={250} height={300} />
				</Box>
				<Box className="flex flex-col w-full h-except-header justify-center items-center">
					<H4Bold text="복잡한 광고주와의 거래, 마케팅, 거래과정, 사후처리를 한번에" />
					<Box className="relative w-[50%] h-[280px] mt-10">
						<Image src="/images/one_queue.png" alt="one_queue" fill />
					</Box>
				</Box>
				<Box className="flex w-full h-except-header justify-center items-center">
					<Box>
						<H4Bold text="유어플래닛과 함께하면" />
						<H4Bold text="더 자유롭게, 더 전문적으로 성장할 수 있어요" />
					</Box>
					<Box className="relative w-[30%] h-[280px] mt-10">
						<Image src="/images/grow_up.png" alt="grow_up" fill />
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default OurWork;
