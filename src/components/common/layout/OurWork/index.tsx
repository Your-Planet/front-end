import Section from "@/components/common/layout/OurWork/components/Section";
import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";

function OurWork() {
	const [boxRef, sectionInView] = useInView({
		triggerOnce: true,
		threshold: 0.4,
	});

	return (
		<Box
			className={`w-full h-auto relative ${sectionInView ? "animate-fade-up animate-delay-300" : "opacity-0"}`}
			ref={boxRef}
		>
			<Box className="px-[150px] h-auto">
				<Section />
			</Box>
		</Box>
	);
}

export default OurWork;
