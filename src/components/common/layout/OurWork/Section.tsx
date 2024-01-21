import { Box, styled } from "@mui/material";
import { forwardRef } from "react";
import H4 from "../../text/H4";
import H5 from "../../text/H5";
import Contents from "./Contents";

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
			<H4 bold>복잡한 광고주와의</H4>
			<H4 bold>거래 프로세스를 한 곳에서</H4>
			<Box className="mt-3">
				<H5 bold color="text-gray-400">
					유어플래닛과 함께하면
				</H5>
				<H5 bold color="text-gray-400">
					더 자유롭게, 더 전문적으로 성장할 수 있어요
				</H5>
			</Box>
			<StyledBox>
				<Contents />
			</StyledBox>
		</Box>
	);
});

Section.displayName = "Section";

export default Section;
