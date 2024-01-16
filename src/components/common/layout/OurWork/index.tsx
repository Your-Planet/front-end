import { Box } from "@mui/material";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section1 from "./section1";

function OurWork() {
	return (
		<Box className="w-full h-auto relative">
			<Box className="px-[100px] h-auto">
				<Section1 />
				<Section2 />
				<Section3 />
			</Box>
		</Box>
	);
}

export default OurWork;
