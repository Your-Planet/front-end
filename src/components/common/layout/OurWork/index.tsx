import { Box } from "@mui/material";
import { useInView } from "react-intersection-observer";
import Section from "./Section";

function OurWork() {
	const [sectionRef, sectionInView] = useInView({
		triggerOnce: true,
		threshold: 0.4,
	});

	const handleIntersect = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("opacity-0");
				entry.target.classList.add("animate-fade-up");
				entry.target.classList.add("animate-delay-300");
			}
		});
	};

	return (
		<Box className={`w-full h-auto relative ${sectionInView ? "animate-fade-up animate-delay-300" : "opacity-0"} `}>
			<Box className="px-[100px] h-auto">
				<Section ref={sectionRef} />
			</Box>
		</Box>
	);
}

export default OurWork;
