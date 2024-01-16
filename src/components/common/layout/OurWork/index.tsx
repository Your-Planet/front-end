import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";

function OurWork() {
	const refSection1 = useRef(null);
	const refSection2 = useRef(null);
	const refSection3 = useRef(null);

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

		const observerSection1 = new IntersectionObserver(handleIntersect, options);
		const observerSection2 = new IntersectionObserver(handleIntersect, options);
		const observerSection3 = new IntersectionObserver(handleIntersect, options);

		if (refSection1.current) {
			observerSection1.observe(refSection1.current);
		}
		if (refSection2.current) {
			observerSection2.observe(refSection2.current);
		}
		if (refSection3.current) {
			observerSection3.observe(refSection3.current);
		}

		return () => {
			if (refSection1.current) {
				observerSection1.unobserve(refSection1.current);
			}
			if (refSection2.current) {
				observerSection2.unobserve(refSection2.current);
			}
			if (refSection3.current) {
				observerSection3.unobserve(refSection3.current);
			}
		};
	}, []);

	return (
		<Box className="w-full h-auto relative">
			<Box className="px-[100px] h-auto">
				<Section1 ref={refSection1} />
				<Section2 ref={refSection2} />
				<Section3 ref={refSection3} />
			</Box>
		</Box>
	);
}

export default OurWork;
