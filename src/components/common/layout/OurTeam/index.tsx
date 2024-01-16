import { Box } from "@mui/material";
import H4Bold from "../../text/H4Bold";
import Card from "./Card";

function OurTeam() {
	return (
		<Box className="w-full h-auto relative">
			<Box className="px-[100px] h-auto">
				<Box className="flex items-center justify-center w-full h-except-header">
					<H4Bold text="직접 경험해보세요" />
				</Box>
				<Box className="flex overflow-hidden bg-white px-[60px] py-0 whitespace-nowrap relative before:absolute before:top-0 before:w-[300px] before:h-full before:content-none before:z-10 before:left-0 after:absolute after:top-0 after:w-[300px] after:h-full after:content-none after:z-10 hover:pause mb-3">
					<Box className="flex hover:pause animate-slide">
						<Card text="마켓팅" backgroundColor="bg-indigo-300" imageSrc="/images/marketing.png" imageAlt="marketing" />
						<Card text="거래" backgroundColor="bg-yellow-300" imageSrc="/images/business.png" imageAlt="business" />
						<Card text="대금처리" backgroundColor="bg-lime-300" imageSrc="/images/process.png" imageAlt="process" />
						<Card
							text="사후처리"
							backgroundColor="bg-orange-300"
							imageSrc="/images/after_service.png"
							imageAlt="after_service"
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default OurTeam;
