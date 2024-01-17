import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import H4Bold from "../../text/H4Bold";
import Card from "./Card";

function OurTeam() {
	const refBox = useRef(null);
	const refSlideSection = useRef(null);

	const handleIntersectBox = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("opacity-0");
				entry.target.classList.add("animate-fade-up");
				entry.target.classList.add("animate-delay-300");
			}
		});
	};

	const handleIntersectSlideSection = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.remove("opacity-0");
				entry.target.classList.add("animate-slide");
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

		const observerBox = new IntersectionObserver(handleIntersectBox, options);
		const observerSlideSection = new IntersectionObserver(handleIntersectSlideSection, options);

		if (refBox.current) {
			observerBox.observe(refBox.current);
		}

		if (refSlideSection.current) {
			observerSlideSection.observe(refSlideSection.current);
		}

		return () => {
			if (refBox.current) {
				observerBox.unobserve(refBox.current);
			}

			if (refSlideSection.current) {
				observerSlideSection.unobserve(refSlideSection.current);
			}
		};
	}, []);

	return (
		<Box className="w-full h-auto px-[100px] relative opacity-0" ref={refBox}>
			<Box className="flex flex-col items-center justify-center w-full h-except-header">
				<H4Bold text="직접 경험해보세요" />
				<Box className="flex overflow-hidden bg-white px-[60px] mt-12 whitespace-nowrap relative before:absolute before:top-0 before:w-[300px] before:h-full before:content-none before:z-10 before:left-0 after:absolute after:top-0 after:w-[300px] after:h-full after:content-none after:z-10 hover:pause">
					<Box className="flex hover:pause opacity-0" ref={refSlideSection}>
						<Card text="마켓팅" backgroundColor="bg-indigo-300" imageSrc="/images/marketing.png" imageAlt="marketing" />
						<Card text="거래" backgroundColor="bg-yellow-300" imageSrc="/images/business.png" imageAlt="business" />
						<Card text="대금처리" backgroundColor="bg-lime-300" imageSrc="/images/process.png" imageAlt="process" />
						<Card
							text="사후처리"
							backgroundColor="bg-orange-300"
							imageSrc="/images/after_service.png"
							imageAlt="after_service"
						/>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default OurTeam;
