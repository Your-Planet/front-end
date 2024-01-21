import { Box } from "@mui/material";
import { forwardRef } from "react";
import H4Bold from "../../text/H4Bold";
import H5Bold from "../../text/H5Bold";

const Section = forwardRef((props, ref) => {
	return (
		<Box className="flex flex-col justify-center w-full h-except-header tracking-wider" ref={ref}>
			<H4Bold text="복잡한 광고주와의" />
			<H4Bold text="거래 프로세스를 한 곳에서" />
			<Box className="mt-3">
				<H5Bold text="유어플래닛과 함께하면" color="text-gray-400" />
				<H5Bold text="더 자유롭게, 더 전문적으로 성장할 수 있어요" color="text-gray-400" />
			</Box>
			<Box className="w-full h-[400px] mt-10 bg-gray-100 rounded-3xl" />
		</Box>
	);
});

Section.displayName = "Section";

export default Section;
