import Contents from "@/components/common/layout/Home/components/OurWork/components/Contents";
import { Box, styled, Typography } from "@mui/material";
import { forwardRef } from "react";

const StyledBox = styled(Box)`
	display: flex;
	width: 100%;
	height: 400px;
	margin-top: 1.5rem;
	border-radius: 1.5rem;
	background-color: #eff2ef;
	background-image: radial-gradient(#a7afd1 1px, transparent 0);
	background-size: 30px 30px;
	background-position: -11px -11px;
	opacity: 1;
`;

const Section = forwardRef((props, ref) => {
	return (
		<Box className="flex flex-col justify-center w-full h-except-header tracking-wider" ref={ref}>
			<Typography variant="h4" fontWeight="bold">
				복잡한 광고주와의
			</Typography>
			<Typography variant="h4" fontWeight="bold">
				거래 프로세스를 한 곳에서
			</Typography>
			<Box className="mt-3">
				<Typography variant="h5" fontWeight="bold" color="GrayText">
					유어플래닛과 함께하면
				</Typography>
				<Typography variant="h5" fontWeight="bold" color="GrayText">
					더 자유롭게, 더 전문적으로 성장할 수 있어요
				</Typography>
			</Box>
			<StyledBox>
				<Contents />
			</StyledBox>
		</Box>
	);
});

Section.displayName = "Section";

export default Section;
