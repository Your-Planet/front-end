import { Box } from "@mui/material";
import { useRef } from "react";
import IntersectionObserverComponent from "../Observer/index";
import Section from "./Section";

function OurWork() {
	const sectionRef = useRef<HTMLDivElement>(null);

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
		<Box className="w-full h-auto relative">
			<Box className="px-[100px] h-auto">
				<IntersectionObserverComponent targetRef={sectionRef} handleIntersect={handleIntersect} />
				<Section ref={sectionRef} />
			</Box>
		</Box>
	);
}

export default OurWork;
