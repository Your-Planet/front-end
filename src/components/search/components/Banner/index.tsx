import { Box, Typography } from "@mui/material";

function Banner() {
	return (
		<Box className="flex w-full h-full justify-center flex-col">
			<Box>
				<Box className="flex animate-fade-right animate-duration-[3s]">
					<Box className="border-t-[10px] border-solid border-t-black">
						<Typography variant="h1" fontWeight="bold">
							PARTNER
						</Typography>
					</Box>
				</Box>
				<Box className="animate-fade-right animate-duration-[3s] animate-delay-1000">
					<Typography variant="h6" color="GrayText">
						유어플래닛은 광고 목적에 맞게 인스타툰 통합 솔루션을 제공합니다.
					</Typography>
				</Box>
			</Box>
		</Box>
	);
}

export default Banner;
