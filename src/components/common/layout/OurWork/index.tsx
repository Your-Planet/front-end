import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Section from "./Section";

function OurWork() {
	const refSection = useRef(null);

	const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("opacity-0");
				entry.target.classList.add("animate-fade-up");
				entry.target.classList.add("animate-delay-300");
			}
		});
	};

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px",
			threshold: 0.4,
		};

		const observerSection = new IntersectionObserver(handleIntersect, options);

		if (refSection.current) {
			observerSection.observe(refSection.current);
		}

		return () => {
			if (refSection.current) {
				observerSection.unobserve(refSection.current);
			}
		};
	}, []);

	return (
		<Box className="w-full h-auto relative">
			<Box className="px-[100px] h-auto">
				<Section ref={refSection} />
			</Box>
		</Box>
	);
}

export default OurWork;
