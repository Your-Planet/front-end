import { Box } from "@mui/material";
import { forwardRef } from "react";
import H4Bold from "../../text/H4Bold";
import H5Bold from "../../text/H5Bold";

const Section = forwardRef((props, ref) => {
	return (
		<Box className="flex flex-col justify-center w-full h-except-header opacity-0" ref={ref}>
			<H4Bold text="작품에만 집중하기 어려운 작가님들을 위해" />
			<H4Bold text="복잡한 광고주와의 거래, 마케팅, 거래과정, 사후처리를 한번에" />
			<H5Bold text="유어플래닛과 함께하면" color="text-gray-400" />
			<H5Bold text="더 자유롭게, 더 전문적으로 성장할 수 있어요" color="text-gray-400" />
			<Box className="w-full h-[400px] mt-10 bg-gray-100 rounded-3xl" />
		</Box>
	);
});

Section.displayName = "Section";

export default Section;
