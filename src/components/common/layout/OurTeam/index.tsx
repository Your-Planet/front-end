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
			<Box className="w-3/5 h-full flex flex-col justify-center">
				<Typography className="p-3" variant="h4">
					Our Team
				</Typography>
				<Box className="w-full h-1/2 flex justify-center items-center">
					<Box className="w-full h-full flex flex-col justify-center p-3">
						<Box className="flex relative w-full h-1/2">
							<Image
								src={marketing}
								alt="marketing"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</Box>
						<Typography className="text-center mt-3" variant="h5">
							마케팅
						</Typography>
					</Box>
					<Box className="w-full h-full flex flex-col justify-center p-3">
						<Box className="flex relative w-full h-1/2">
							<Image
								src={productDesign}
								alt="product design"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</Box>
						<Typography className="text-center mt-3" variant="h5">
							기획
						</Typography>
					</Box>
					<Box className="w-full h-full flex flex-col justify-center p-3">
						<Box className="flex relative w-full h-1/2">
							<Image
								src={branding}
								alt="branding"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
						</Box>
						<Typography className="text-center mt-3" variant="h5">
							브랜딩
						</Typography>
					</Box>
					<Box className="w-full h-full flex flex-col justify-center p-3">
						<Box className="flex relative w-full h-1/2">
							<Image
								src={dataAnalysis}
								alt="data analysis"
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
							/>
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
