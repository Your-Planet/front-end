import { Box } from "@mui/material";
import { cloneElement, useEffect, useRef } from "react";
import H4Bold from "../../text/H4Bold";
import Card from "./Card";

function OurTeam() {
	const refBox = useRef<HTMLDivElement>(null);
	const refSlideSection = useRef<HTMLDivElement>(null);

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
				entry.target.classList.add("animate-delay-[2000ms]");
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

	const slidingCards = () => {
		const cards = [
			<Card
				key="마켓팅"
				text="마켓팅"
				backgroundColor="bg-indigo-300"
				imageSrc="/images/marketing.png"
				imageAlt="marketing"
			/>,
			<Card
				key="거래"
				text="거래"
				backgroundColor="bg-yellow-300"
				imageSrc="/images/business.png"
				imageAlt="business"
			/>,
			<Card
				key="대금처리"
				text="대금처리"
				backgroundColor="bg-lime-300"
				imageSrc="/images/process.png"
				imageAlt="process"
			/>,
			<Card
				key="사후처리"
				text="사후처리"
				backgroundColor="bg-orange-300"
				imageSrc="/images/after_service.png"
				imageAlt="after_service"
			/>,
		];

		const duplicatedCards = cards.map((card) => cloneElement(card, { key: `duplicated-${card.props.text}` }));

		return [...cards, ...duplicatedCards];
	};

	return (
		<Box className="w-full h-auto px-[100px] relative opacity-0" ref={refBox}>
			<Box className="flex flex-col items-center justify-center w-full h-except-header">
				<H4Bold text="직접 경험해보세요" />
				<Box className="flex w-full items-center overflow-hidden h-[300px] whitespace-nowrap relative before:absolute before:top-0 before:w-[30px] before:h-full before:content-[''] before:z-10 before:left-0 before:bg-gradient-to-l before:from-white/0 before:to-white after:absolute after:top-0 after:w-[30px] after:h-full after:content-[''] after:z-10 after:right-0 after:bg-gradient-to-r after:from-white/0 after:to-white hover:pause">
					<Box className="flex hover:pause opacity-0" ref={refSlideSection}>
						{slidingCards()}
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default OurTeam;
