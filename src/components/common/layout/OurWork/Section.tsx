import { Box } from "@mui/material";
import { forwardRef } from "react";
import H4 from "../../text/H4";
import H5 from "../../text/H5";
import Contents from "./Contents";

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
			<Box className="flex w-full h-[400px] mt-6 bg-gray-100 rounded-3xl px-5">
				<Contents />
			</Box>
		</Box>
	);
});

Section.displayName = "Section";

export default Section;
