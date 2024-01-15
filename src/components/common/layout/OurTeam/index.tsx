import { Box, Typography } from "@mui/material";
import Image from "next/image";

function OurTeam() {
	return (
		<Box className="w-full h-auto relative">
			<Box className="px-[100px] h-auto">
				<Box className="flex items-center justify-center w-full h-except-header">
					<Typography className="font-bold" variant="h4">
						직접 경험해보세요
					</Typography>
				</Box>
				<Box className="flex overflow-hidden bg-white px-[60px] py-0 whitespace-nowrap relative before:absolute before:top-0 before:w-[300px] before:h-full before:content-none before:z-10 before:left-0 after:absolute after:top-0 after:w-[300px] after:h-full after:content-none after:z-10 hover:pause mb-3">
					<Box className="flex hover:pause animate-slide">
						<Box className="flex flex-col p-10 bg-indigo-300 w-[260px] h-[250px] mx-2 my-0 rounded-xl">
							<Box className="flex justify-center items-center relative w-16 h-16 rounded-full bg-white">
								<Image src="/images/marketing.png" alt="marketing" width={50} height={50} />
							</Box>
							<Box className="py-8">
								<Typography className="font-bold" variant="h4">
									마켓팅
								</Typography>
							</Box>
						</Box>
						<Box className="flex flex-col p-10 bg-yellow-300 w-[260px] h-[250px] mx-2 my-0 rounded-xl">
							<Box className="flex justify-center items-center relative w-16 h-16 rounded-full bg-white">
								<Image src="/images/business.png" alt="business" width={50} height={50} />
							</Box>
							<Box className="py-8">
								<Typography className="font-bold" variant="h4">
									거래
								</Typography>
							</Box>
						</Box>
						<Box className="flex flex-col p-10 bg-lime-300 w-[260px] h-[250px] mx-2 my-0 rounded-xl">
							<Box className="flex justify-center items-center relative w-16 h-16 rounded-full bg-white">
								<Image src="/images/process.png" alt="process" width={50} height={50} />
							</Box>
							<Box className="py-8">
								<Typography className="font-bold" variant="h4">
									대금처리
								</Typography>
							</Box>
						</Box>
						<Box className="flex flex-col p-10 bg-orange-300 w-[260px] h-[250px] mx-2 my-0 rounded-xl">
							<Box className="flex justify-center items-center relative w-16 h-16 rounded-full bg-white">
								<Image src="/images/after_service.png" alt="after_service" width={50} height={50} />
							</Box>
							<Box className="py-8">
								<Typography className="font-bold" variant="h4">
									사후관리
								</Typography>
							</Box>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default OurTeam;
