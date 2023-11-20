import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import marketing from "@/public/images/marketing.png";
import productDesign from "@/public/images/product-design.png";
import branding from "@/public/images/branding.png";
import dataAnalysis from "@/public/images/data-analysis.png";

const OurTeam = () => {
	return (
		<Box className="w-full h-screen flex justify-center items-center">
			<Box className="w-full h-full max-w-[1200px] flex flex-col justify-center ml-40 mr-40">
				<Typography className="p-3" variant="h4">
					Our Team
				</Typography>
				<Box className="w-full flex justify-center items-center pt-20">
					<Box className="w-full h-full flex flex-col items-center">
						<Box className="flex relative w-[220px] h-[220px]">
							<Image src={marketing} alt="marketing" fill priority={true} sizes="(max-width: 768px) 200px, 220px" />
						</Box>
						<Typography className="text-center mt-3" variant="h5">
							마케팅
						</Typography>
					</Box>
					<Box className="w-full h-full flex flex-col items-center">
						<Box className="flex relative w-[220px] h-[220px]">
							<Image src={productDesign} alt="product design" fill sizes="(max-width: 768px) 200px, 220px" />
						</Box>
						<Typography className="text-center mt-3" variant="h5">
							기획
						</Typography>
					</Box>
					<Box className="w-full h-full flex flex-col items-center">
						<Box className="flex relative w-[220px] h-[220px]">
							<Image src={branding} alt="branding" fill sizes="(max-width: 768px) 200px, 220px" />
						</Box>
						<Typography className="text-center mt-3" variant="h5">
							브랜딩
						</Typography>
					</Box>
					<Box className="w-full h-full flex flex-col items-center">
						<Box className="flex relative w-[220px] h-[220px]">
							<Image src={dataAnalysis} alt="data analysis" fill sizes="(max-width: 768px) 200px, 220px" />
						</Box>
						<Typography className="text-center mt-3" variant="h5">
							데이터 분석
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default OurTeam;
