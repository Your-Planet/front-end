import { Box, Typography } from "@mui/material";
import Image from "next/image";

function OurWork() {
	return (
		<Box className="w-full h-auto relative">
			<Box className="px-[100px] h-auto">
				<Box className="flex items-center justify-evenly w-full h-except-header">
					<Typography className="font-bold" variant="h4">
						작품에만 집중하기 어려운 작가님들을 위해
					</Typography>
					<Image src="/images/hard.png" alt="hard" width={250} height={300} />
				</Box>
				<Box className="flex flex-col w-full h-except-header justify-center items-center">
					<Typography className="font-bold" variant="h4">
						복잡한 광고주와의 거래, 마케팅, 거래과정, 사후처리를 한번에
					</Typography>
					<Box className="relative w-[50%] h-[280px] mt-10">
						<Image src="/images/one_queue.png" alt="one_queue" fill />
					</Box>
				</Box>
				<Box className="flex w-full h-except-header justify-center items-center">
					<Box>
						<Typography className="font-bold" variant="h4">
							유어플래닛과 함께하면
						</Typography>
						<Typography className="font-bold" variant="h4">
							더 자유롭게, 더 전문적으로 성장할 수 있어요
						</Typography>
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
