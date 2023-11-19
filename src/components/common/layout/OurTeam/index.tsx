import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import marketing from "@/public/images/marketing.png";
import branding from "@/public/images/branding.png";
import dataAnalysis from "@/public/images/data-analysis.png";
import productDesign from "@/public/images/product-design.png";

const OurTeam = () => {
	return (
		<Box className="w-full h-screen flex justify-center items-center">
			<Box className="w-1/2 h-full flex flex-col justify-center items-center mx-0 my-auto">
				<Typography className="" variant="h4">
					Our Team
				</Typography>
				<Box className="w-full h-1/2 flex justify-center items-center">
					<Box className="flex relative w-1/2 h-1/2">
						<Image src={marketing} alt="marketing" fill />
						<Typography variant="subtitle2">마케팅</Typography>
					</Box>
					<Box className="flex relative w-1/2 h-1/2">
						<Image src={productDesign} alt="product-design" fill />
						<Typography variant="subtitle2">기획</Typography>
					</Box>
					<Box className="flex relative w-1/2 h-1/2">
						<Image src={branding} alt="branding" fill />
						<Typography variant="subtitle2">브랜딩</Typography>
					</Box>
					<Box className="flex relative w-1/2 h-1/2">
						<Image src={dataAnalysis} alt="data-analysis" fill />
						<Typography variant="subtitle2">데이터 분석</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default OurTeam;
