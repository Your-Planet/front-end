import { Box } from "@mui/material";
import H1 from "../common/text/H1";
import H6 from "../common/text/H6";

function Banner() {
	return (
		<Box className="flex w-full h-full justify-center flex-col">
			<Box>
				<Box className="flex animate-fade-right animate-duration-[3s]">
					<Box className="border-t-[10px] border-solid border-t-black">
						<H1 bold>PARTNER</H1>
					</Box>
				</Box>
				<Box className="animate-fade-right animate-duration-[3s] animate-delay-1000">
					<H6 color="text-gray-500">유어플래닛은 광고 목적에 맞게 인스타툰 통합 솔루션을 제공합니다.</H6>
				</Box>
			</Box>
		</Box>
	);
}

export default Banner;
